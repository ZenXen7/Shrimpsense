
"use client";


const BackToLandingPageLink = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    (window.location.href = "/"); 
  };

  return (
    <button onClick={handleClick}>
      Back to Landing Page
    </button>
  );
};

export default BackToLandingPageLink;
