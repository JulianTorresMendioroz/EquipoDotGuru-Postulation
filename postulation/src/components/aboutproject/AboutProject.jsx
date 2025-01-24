import React, { useState } from "react";
import './AboutProject.css';

const AboutProject = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="div-about-project">
      <h1 className="title-about">
        {language === 'es' ? '¿Cómo se creó este proyecto?' : 'How was this project created?'}
      </h1>
      
      <p className="description-about">
        {language === 'es'
          ? 'Este proyecto fue creado utilizando React, junto con algunas librerías útiles para mejorar la experiencia del usuario.'
          : 'This project was built using React, along with some useful libraries to enhance the user experience.'}
      </p>
      
      <h2 className="subtitle-about">
        {language === 'es' ? '1. React Router' : '1. React Router'}
      </h2>
      <p className="text-about">
        {language === 'es'
          ? 'Para manejar la navegación dentro de la aplicación, utilicé React Router (versión 7.1.3). Esta librería permite a los usuarios navegar fácilmente entre diferentes vistas de la aplicación sin recargar la página. Proporciona enrutamiento dinámico y es una herramienta esencial para hacer la aplicación más interactiva y fácil de usar.'
          : 'To handle navigation within the app, I used React Router (version 7.1.3). This library allows users to easily navigate between different views of the app without reloading the page. It provides dynamic routing and is an essential tool to make the application more interactive and user-friendly.'}
      </p>
      
      <h2 className="subtitle-about">
        {language === 'es' ? '2. React Hot Toast' : '2. React Hot Toast'}
      </h2>
      <p className="text-about">
        {language === 'es'
          ? 'Para las notificaciones, integré react-hot-toast (versión 2.5.1). Esta librería es ligera y me permite mostrar toasts personalizables para alertar al usuario sobre acciones importantes, como envíos de formularios, registros exitosos o errores. Es una excelente herramienta para proporcionar retroalimentación en tiempo real al usuario.'
          : 'For notifications, I integrated react-hot-toast (version 2.5.1). This library is lightweight and allows me to display customizable toasts to alert the user about important actions, such as form submissions, successful registrations, or errors. It\'s a great tool to provide real-time feedback to the user.'}
      </p>

      <h2 className="subtitle-about">
        {language === 'es' ? '3. Validación de correo electrónico' : '3. Email Validation'}
      </h2>
      <p className="text-about">
        {language === 'es'
          ? 'Para validar los correos electrónicos, utilicé una expresión regular (regex) que asegura que el formato del correo sea válido. Esto permite una mejor interacción con el usuario, ya que le informa cuando el correo ingresado no es válido.'
          : 'For email validation, I used a regular expression (regex) to ensure the email format is valid. This allows for better user interaction by informing them when the entered email is invalid.'}
      </p>


      <p className="description-about">
        {language === 'es'
          ? 'Usando estas librerías, pude crear una interfaz más atractiva e intuitiva. La combinación de una navegación fluida y notificaciones interactivas hace que la aplicación se sienta más ágil y fácil de usar.'
          : 'By using these libraries, I was able to create a more engaging and intuitive user interface. The combination of smooth navigation and interactive notifications makes the app feel more responsive and user-friendly.'}
      </p>

      <div className="language-switcher">
        <button onClick={() => handleLanguageChange('es')} className="language-button">
          Español
        </button>
        <button onClick={() => handleLanguageChange('en')} className="language-button">
          English
        </button>
      </div>
    </div>
  );
};

export default AboutProject;
