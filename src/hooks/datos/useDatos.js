const useDatos = () => {
  const datosContacto = {
    celular: '300 377 2154',
    correo: 'jhonier.jimenez@udea.edu.co',
    ubicacion: 'Medellín, Antioquia',
  };

  const estudios = {
    carrera: 'Ingeniería de Sistemas',
    universidad: 'Universidad de Antioquia',
    fecha: '2017-Actualidad',
  };

  const experiencia = [
    {
      cargo: 'Desarrollador de Software',
      fecha: 'Junio 2021 - Actualidad',
      empresa: 'Experimentality S.A.S',
      descripcion:
        'Desarrollador de Software front-end; participación activa en proyectos construidos sobre React y Angular.',
    },
    {
      cargo: 'Auxiliar de Programación',
      fecha: '2020-2- 2021-2',
      empresa: 'Universidad de Antioquía',
      descripcion:
        'Auxiliar de programación, modificaciones al portal de la universidad',
    },
    {
      cargo: 'Tutor Online en U.S.A',
      fecha: '2019-2- 2021-1',
      empresa: 'Tutor.com',
      descripcion:
        'Tutor online para estudiantes de colegios y universidades en Estados Unidos, en materias como cálculo y desarrollo Web',
    },
  ];

  const idiomas = [
    {
      idioma: 'Inglés',
      nivel: 'C2 proficient',
    },
    {
      idioma: 'Francés',
      nivel: 'B1 Intermedio',
    },
    {
      idioma: 'Español',
      nivel: 'Nativo',
    },
  ];

  const perfil =
    'Desarrollador de Software con dominio del inglés; actualmente estoy cursando los últimos semestres de ingeniería de sistemas en la Universidad de Antioquia. Soy apasionado por las tecnologías, el aprendizaje constante y la enseñanza.';

  const cursos = [
    'GoogleCloud Skilling  Campaign - CO  Associations',

    'Angular - The Complete Guide (2022 Edition)-Udemy',

    'Accelerated JavaScript Training - Udemy',

    'CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) -Udemy',

    'The Complete 2020 Web Development Bootcamp -Udemy',

    'Desarrollo de Video Juegos -Medellín Valle del Software',
  ];

  const habilidades = [
    {
      lenguaje: 'Angular',
      porcentaje: 80,
    },
    {
      lenguaje: 'React',
      porcentaje: 70,
    },
    {
      lenguaje: 'JavaScript',
      porcentaje: 80,
    },
    {
      lenguaje: 'Node Js',
      porcentaje: 65,
    },
    {
      lenguaje: 'Html5',
      porcentaje: 90,
    },
    {
      lenguaje: 'CSS3',
      porcentaje: 90,
    },
    {
      lenguaje: 'Java',
      porcentaje: 75,
    },
    {
      lenguaje: 'Python',
      porcentaje: 65,
    },
  ];

  const redesSociales = [
    'Facebook',
    'GitHub',
    'Google Cloud Skill Boost',
    'LinkedIn',
  ];
  return {
    datosContacto,
    estudios,
    experiencia,
    idiomas,
    perfil,
    cursos,
    habilidades,
    redesSociales,
  };
};

export { useDatos };
