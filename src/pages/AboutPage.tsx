import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam, quis officia assumenda asperiores doloribus fugiat provident
        a eum tenetur.
      </p>
      <button className="btn" onClick={() => navigate(-1)}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
