import Footer from "./components/footer/Footer";
import Foot from "../src/components/Foot";
import Navbar from "./components/navbar/Navbar";
import Academic from "./pages/Academic";
import Admission from "./pages/Admission";
import Faculties from "./pages/Faculties";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import { Routes, Route } from "react-router-dom";
import Life from "./pages/Life";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ErrorBoundary from "./components/ErrorBoundary";

// New comprehensive pages
import AboutUs from "./pages/AboutUs";
import NewsEvents from "./pages/NewsEvents";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import ViceChancellor from "./pages/ViceChancellor";
import Leadership from "./pages/Leadership";
import Campus from "./pages/Campus";
import Programs from "./pages/Programs";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import ApplicationProcess from "./pages/ApplicationProcess";
import InternationalStudents from "./pages/InternationalStudents";
import StudentServices from "./pages/StudentServices";
import Research from "./pages/Research";
import Library from "./pages/Library";
import UniversityMedia from "./pages/UniversityMedia";
import FacultyDetail from "./pages/FacultyDetail";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <ErrorBoundary>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/faculties/:slug" element={<FacultyDetail />} />
            <Route path="/life" element={<Life />} />
            <Route path="/portal" element={<Portal />} />
            
            {/* University Information */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/vice-chancellor" element={<ViceChancellor />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/campus" element={<Campus />} />
            
            {/* Academics */}
            <Route path="/programs" element={<Programs />} />
            <Route path="/research" element={<Research />} />
            <Route path="/library" element={<Library />} />
            
            {/* Admissions */}
            <Route path="/admission-requirements" element={<AdmissionRequirements />} />
            <Route path="/application-process" element={<ApplicationProcess />} />
            <Route path="/international-students" element={<InternationalStudents />} />
            
            {/* Student Life */}
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/university-media" element={<UniversityMedia />} />
            
            {/* News & Communication */}
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
        <Foot />
      </div>
    </ErrorBoundary>
  );
}

export default App;
