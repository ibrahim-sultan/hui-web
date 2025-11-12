import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './universityMedia.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

initializeApp(firebaseConfig);
const storage = getStorage();

const UniversityMedia = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchInitialMedia();
  }, []);

  const fetchInitialMedia = async () => {
    const listRef = ref(storage, 'media/');
    const res = await listAll(listRef);
    const urls = await Promise.all(
      res.items.map(itemRef => getDownloadURL(itemRef).then(url => ({ type: 'image', src: url, alt: itemRef.name })))
    );
    setItems(urls.slice(0, 4));
    if (urls.length <= 4) setHasMore(false);
  };

  const loadMore = async () => {
    const listRef = ref(storage, 'media/');
    const res = await listAll(listRef);
    const urls = await Promise.all(
      res.items.map(itemRef => getDownloadURL(itemRef).then(url => ({ type: 'image', src: url, alt: itemRef.name })))
    );
    const next = urls.slice(items.length, items.length + 2);
    setTimeout(() => {
      setItems([...items, ...next]);
      if (items.length + next.length >= urls.length) setHasMore(false);
    }, 1000);
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    const storageRef = ref(storage, `media/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      () => {}, 
      (error) => { console.error(error); setUploading(false); }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setItems(prev => [...prev, { type: 'image', src: downloadURL, alt: file.name }]);
          setUploading(false);
          setFile(null);
        });
      }
    );
  };

  const handleDelete = async (item) => {
    const confirm = window.confirm(`Delete ${item.alt}?`);
    if (!confirm) return;
    const fileRef = ref(storage, `media/${item.alt}`);
    try {
      await deleteObject(fileRef);
      setItems(prev => prev.filter(i => i.src !== item.src));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const imageItems = items.filter(item => item.type === 'image');

  return (
    <section className="media-section">
      <h2>🎥 University Media Center</h2>

      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading more media...</h4>}
        className="media-grid"
      >
        {items.map((item, index) => (
          item.type === 'image' ? (
            <div key={index} className="media-item-wrapper">
              <img
                src={item.src}
                alt={item.alt}
                className="media-item"
                onClick={() => {
                  setPhotoIndex(imageItems.findIndex(img => img.src === item.src));
                  setIsLightboxOpen(true);
                }}
              />
              <button className="delete-btn" onClick={() => handleDelete(item)}>🗑</button>
            </div>
          ) : null
        ))}
      </InfiniteScroll>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={imageItems[photoIndex].src}
          nextSrc={imageItems[(photoIndex + 1) % imageItems.length].src}
          prevSrc={imageItems[(photoIndex + imageItems.length - 1) % imageItems.length].src}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + imageItems.length - 1) % imageItems.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageItems.length)}
          imageCaption={imageItems[photoIndex].alt}
        />
      )}

      <div className="admin-panel">
        <h3>Admin Panel</h3>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload} disabled={uploading || !file} className="btn-upload">
          {uploading ? 'Uploading...' : 'Upload New Media'}
        </button>
      </div>
    </section>
  );
};

export default UniversityMedia;
