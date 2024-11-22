import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nextPage = location.state?.nextPage || "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(nextPage);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigate, nextPage]);

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex flex-col items-center justify-center text-white">
      <div className="w-8 h-8 border-t-2 border-primary rounded-full animate-spin mb-4" />
      <p className="text-lg">Generating...</p>
    </div>
  );
};

export default LoadingPage;