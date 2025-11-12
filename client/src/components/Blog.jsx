import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  doc,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import './blog.css';

const Blog = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [featuredImageFile, setFeaturedImageFile] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [postMessage, setPostMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      loadPosts();
    });
    return () => unsubscribe();
  }, []);

  const showMessage = (setter, message, type = 'success') => {
    setter(`<div class="${type}">${message}</div>`);
    setTimeout(() => setter(''), 3000);
  };

  const loadPosts = async () => {
    try {
      const postsRef = collection(db, 'posts');
      const q = query(postsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);

      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(postsData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading posts:', error);
      setLoading(false);
    }
  };

 const handleFeaturedImageUpload = (e) => {
  const file = e.target?.files?.[0];
  if (!file) return;
  
  setFeaturedImageFile(file);

  const reader = new FileReader();
  reader.onload = (e) => setFeaturedImagePreview(e.target.result);
  reader.readAsDataURL(file);
};


 const handleContentImages = (e) => {
  const files = e.target?.files ? Array.from(e.target.files) : [];
  if (files.length === 0) return;
  
  files.forEach((file) => {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setPostContent((prev) => prev + `\n\n![Image](${imageUrl})\n\n`);
    };
    reader.readAsDataURL(file);
  });
};

  const processContent = (content) => {
    content = content.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 10px; margin: 15px 0; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">'
    );
    content = content.replace(
      /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/gi,
      '<img src="$1" style="max-width: 100%; height: auto; border-radius: 10px; margin: 15px 0; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">'
    );
    content = content.replace(/\n/g, '<br>');
    return content;
  };

  const getExcerpt = (content, maxLength = 150) => {
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength ? textContent.substring(0, maxLength) + '...' : textContent;
  };

  const signUp = async () => {
    if (!email || !password) return showMessage(setAuthMessage, 'Please enter both email and password', 'error');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage(setAuthMessage, 'Admin account created successfully!');
      setEmail('');
      setPassword('');
    } catch (error) {
      showMessage(setAuthMessage, error.message, 'error');
    }
  };

  const signIn = async () => {
    if (!email || !password) return showMessage(setAuthMessage, 'Please enter both email and password', 'error');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage(setAuthMessage, 'Signed in successfully!');
      setEmail('');
      setPassword('');
    } catch (error) {
      showMessage(setAuthMessage, error.message, 'error');
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      showMessage(setAuthMessage, 'Signed out successfully!');
      setShowAdminPanel(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const createPost = async () => {
    if (!postTitle || !postContent) {
      showMessage(setPostMessage, 'Please enter both title and content', 'error');
      return;
    }

    try {
      let featuredImage = "";

      if (featuredImageFile) {
        const storageRef = ref(storage, `images/${Date.now()}_${featuredImageFile.name}`);
        const snapshot = await uploadBytes(storageRef, featuredImageFile);
        featuredImage = await getDownloadURL(snapshot.ref);
      } else if (featuredImageUrl) {
        featuredImage = featuredImageUrl
      }

      await addDoc(collection(db, 'posts'), {
        title: postTitle,
        content: postContent,
        featuredImage,
        author: currentUser.email,
        authorId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      showMessage(setPostMessage, 'Post published successfully!');
      resetForm();
      loadPosts();
      setTimeout(() => setShowPostForm(false), 2000);
    } catch (error) {
      showMessage(setPostMessage, error.message, 'error');
    }
  };

  const updatePost = async () => {
    if (!postTitle || !postContent) {
      showMessage(setPostMessage, 'Please enter both title and content', 'error');
      return;
    }

    try {
      let featuredImage = featuredImageUrl;

      if (featuredImageFile) {
        const storageRef = ref(storage, `images/${Date.now()}_${featuredImageFile.name}`);
        const snapshot = await uploadBytes(storageRef, featuredImageFile);
        featuredImage = await getDownloadURL(snapshot.ref);
      }

      const postRef = doc(db, 'posts', editingPostId);
      await updateDoc(postRef, {
        title: postTitle,
        content: postContent,
        featuredImage: featuredImage || '',
        updatedAt: new Date(),
      });

      showMessage(setPostMessage, 'Post updated successfully!');
      cancelEdit();
      loadPosts();
    } catch (error) {
      showMessage(setPostMessage, error.message, 'error');
    }
  };

  const deletePost = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await deleteDoc(doc(db, 'posts', postId));
      loadPosts();
      setShowModal(false);
    } catch (error) {
      alert(`Error deleting post: ${error.message}`);
    }
  };

  const editPost = (post) => {
    setEditingPostId(post.id);
    setPostTitle(post.title);
    setPostContent(post.content);
    setFeaturedImageUrl(post.featuredImage || '');
    if (post.featuredImage) setFeaturedImagePreview(post.featuredImage);
    setShowPostForm(true);
  };

  const resetForm = () => {
    setPostTitle('');
    setPostContent('');
    setFeaturedImageUrl('');
    setFeaturedImageFile(null);
    setFeaturedImagePreview('');
    setEditingPostId(null);
  };

  const cancelEdit = () => {
    resetForm();
    setShowPostForm(false);
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

    return (
        <div>
            {/* Admin button removed */}

            <div className="container">
                <header className="header">
                    <h1>✨ Trending Stories ✨</h1>
                    <p>Discover amazing stories and insights</p>
                </header>

                {/* Admin Panel */}
                {showAdminPanel && (
                    <div className="admin-panel active">
                        {!currentUser ? (
                            <div>
                                <h2>Admin Login</h2>
                                <div className="auth-form">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter admin email"
                                    />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter admin password"
                                    />
                                    <button className="btn btn-primary" onClick={signIn}>Sign In</button>
                                    <button className="btn btn-success" onClick={signUp}>Sign Up</button>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: authMessage }} />
                            </div>
                        ) : (
                            <div>
                                <h2>Welcome back, {currentUser.email}!</h2>
                                <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
                                <button className="btn btn-primary" onClick={() => setShowPostForm(true)}>Create New Post</button>
                            </div>
                        )}
                    </div>
                )}

                {/* Post Creation Form */}
                {showPostForm && currentUser && (
                    <div className="post-form active">
                        <h3>{editingPostId ? 'Edit Post' : 'Create New Post'}</h3>
                        <div className="form-group">
                            <label>Post Title</label>
                            <input
                                type="text"
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                                placeholder="Enter post title"
                            />
                        </div>
                        <div className="form-group">
                            <label>Featured Image</label>
                            <div className="image-upload">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFeaturedImageUpload}
                                />
                                <input
                                    type="url"
                                    value={featuredImageUrl}
                                    onChange={(e) => setFeaturedImageUrl(e.target.value)}
                                    placeholder="Or enter image URL"
                                />
                            </div>
                            {featuredImagePreview && (
                                <img
                                    src={featuredImagePreview}
                                    alt="Featured preview"
                                    className="image-preview"
                                    style={{ display: 'block' }}
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <label>Post Content</label>
                            <textarea
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                                placeholder="Write your post content here... You can include image URLs in your content and they will be displayed as images."
                            />
                        </div>
                        <div className="form-group">
                            <label>Content Images (Optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleContentImages}
                            />
                            <small>Select multiple images to insert into your content</small>
                        </div>
                        {editingPostId ? (
                            <button className="btn btn-success" onClick={updatePost}>Update Post</button>
                        ) : (
                            <button className="btn btn-primary" onClick={createPost}>Publish Post</button>
                        )}
                        <button className="btn btn-danger" onClick={cancelEdit}>Cancel</button>
                        <div dangerouslySetInnerHTML={{ __html: postMessage }} />
                    </div>
                )}

                {/* Posts Grid */}
                <div className="posts-grid">
                    {loading ? (
                        <div className="loading">Loading posts...</div>
                    ) : posts.length === 0 ? (
                        <div className="loading">No posts yet. Check back soon for amazing content!</div>
                    ) : (
                        posts.map((post) => {
                            const processedContent = processContent(post.content);
                            const excerpt = getExcerpt(processedContent);
                            const isAuthor = currentUser && currentUser.uid === post.authorId;
                            const postDate = post.createdAt ? new Date(post.createdAt.seconds * 1000).toLocaleDateString() : 'Unknown date';

                            return (
                                <div key={post.id} className="post-card" onClick={() => openModal(post)}>
                                    {post.featuredImage ? (
                                        <img src={post.featuredImage} alt={post.title} className="post-card-image" />
                                    ) : (
                                        <div className="post-card-image"></div>
                                    )}
                                    <div className="post-card-content">
                                        <h3 className="post-card-title">{post.title}</h3>
                                        <p className="post-card-excerpt">{excerpt}</p>
                                        <div className="post-card-meta">
                                            <span>By {post.author} • {postDate}</span>
                                            {isAuthor && (
                                                <div className="post-card-actions" onClick={(e) => e.stopPropagation()}>
                                                    <button className="btn btn-primary" onClick={() => editPost(post)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Post Modal */}
            {showModal && selectedPost && (
                <div className="modal" style={{ display: 'block' }} onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            {selectedPost.featuredImage && (
                                <img src={selectedPost.featuredImage} alt={selectedPost.title} className="modal-featured-image" />
                            )}
                            <button className="modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <h1 className="modal-title">{selectedPost.title}</h1>
                            <div className="modal-meta">
                                By {selectedPost.author} • {selectedPost.createdAt ? new Date(selectedPost.createdAt.seconds * 1000).toLocaleDateString() : 'Unknown date'}
                            </div>
                            <div 
                                className="modal-content-text" 
                                dangerouslySetInnerHTML={{ __html: processContent(selectedPost.content) }}
                            />
                        </div>
                        {currentUser && currentUser.uid === selectedPost.authorId && (
                            <div className="modal-actions">
                                <button className="btn btn-primary" onClick={() => { editPost(selectedPost); closeModal(); }}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deletePost(selectedPost.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;