/**
 * Copy institucional — transcripción textual del brochure de Helfen.
 * No editar sin validar contra el PDF: el texto es verbatim.
 */

export const intro = {
  titulo: "Cuidados e internación domiciliaria",
  parrafos: [
    "Los antecedentes más lejanos de esta especialidad datan de fines del siglo XVIII en Boston, USA. Se cree que su advenimiento subyace con el objetivo de profesionalizar el cuidado que entre familiares y amigos le daban a sus enfermos.",
    "En Argentina, algunos hospitales comenzaron a implementar la modalidad como desahogo en la década de los 80´.",
    "Sin embargo en la actualidad y más allá de la disponibilidad de cama en un centro asistencial, es considerado un servicio de valor agregado ya que probado está mejora drásticamente tanto la efectiva recuperación física y mental del paciente —como así— la de su entorno familiar.",
    "Existen en la actualidad diferentes tipos de servicios que abarcan desde cuidados básicos de rutina, acompañamiento terapéutico a tiempo parcial o 24x7, hasta complejidades tales como discapacidades o cuidados paliativos. Pudiendo incluir todo el manejo logístico necesario (camas ortopédicas, medicamentos, entre otros) en un esquema integral.",
    "Por casos el servicio está alcanzado por la cobertura médica u obra social del paciente, debiendo entonces realizar su gestión allí; o bien se contrata particularmente.",
  ],
} as const;

export const beneficios = [
  "Evitar internaciones prolongadas y posibles infecciones intrahospitalarias.",
  "Volver a vivir en “su ambiente”, pero con la atención profesional adecuada.",
  "Mantener la rutina y equilibrio diario en el hogar.",
  "Estar rodeado de familiares y afectos disponiendo ambos de tiempo de calidad para compartir.",
] as const;

export const niveles = [
  {
    rol: "Cuidador / Acompañante de Salud",
    texto:
      "Tiene como función realizar (únicamente en relación al paciente declarado) tareas de higiene personal; movilización, traslados y paseos; cocina sencilla, mantenimiento y limpieza del dormitorio y ámbito específico del desenvolvimiento del paciente (pudiendo solicitar servicios adicionales de limpieza general de la vivienda); alimentación; administración de medicamentos (solo vía oral y con prescripción médica escrita recibida con anterioridad de parte del médico tratante).",
  },
  {
    rol: "Acompañante Terapéutico",
    texto:
      "Incluye lo detallado para el cuidador / acompañante de salud, sumándole tareas que colaboren en el ejercicio de las funciones cognitivas. Trabaja en conjunto con el terapeuta o institución tratante brindando contención general concerniente al aspecto psicológico del paciente.",
  },
  {
    rol: "Auxiliar de Enfermería",
    texto:
      "Incluye lo detallado para el acompañante terapéutico, sumándole administración de medicación vía intramuscular. También están capacitados para realizar control de la tensión arterial; glucemia y curaciones varias (escaras y heridas simples).",
  },
  {
    rol: "Enfermero Profesional",
    texto:
      "Incluye lo detallado para el auxiliar de enfermería, encontrándose a la vez capacitados para realizar maniobras invasivas tales como: administración de medicación por vía endovenosa; colocación y control de sondas; cateterismo en general.",
  },
] as const;

export const gruposServicios = [
  {
    titulo: "Servicios Corporativos",
    items: [
      "Clínicas",
      "Sanatorios",
      "Centros de Rehabilitación",
      "Geriátricos",
      "Prepagas",
      "Obras Sociales",
      "Compañías de Seguros",
      "ONGs",
      "Instituciones Educativas",
      "Clubes y Gimnasios",
      "Countries y Barrios Privados",
    ],
  },
  {
    titulo: "Servicios Particulares",
    items: [
      "Niños",
      "Adultos",
      "Mayores",
      "Discapacitados",
      "Incapacitados Temporales",
      "Lesionados",
      "Intervenidos Quirúrgicamente",
    ],
  },
  {
    titulo: "Tipos de Servicio",
    items: [
      "Cuidados e Internación Domiciliaria",
      "Cuidados en Centro Asistencial",
      "Cuidados Paliativos",
    ],
  },
  {
    titulo: "Especialidades",
    items: [
      "Enfermería Profesional",
      "Auxiliares en Enfermería",
      "Acompañantes Terapéuticos",
      "Cuidadores",
      "Kinesiología",
      "Fonoaudiología",
      "Psicología",
    ],
  },
  {
    titulo: "Servicios de Valor Agregado",
    items: [
      "Peluquería",
      "Manicuría",
      "Pedicuría",
      "Limpieza integral del hogar",
      "Monitoreo (*)",
      "Traslados",
      "Paseos",
      "Provisión de Aparatología e Insumos",
      "Asesoramiento Legal",
      "Eldering (**)",
    ],
  },
] as const;

export const notasServicios = [
  "(*) Método y Sistema Propietario Registrado por Helfen, Cuidados en Salud.",
  "(**) Tratamiento integral de las necesidades del adulto en el hogar.",
] as const;

export const valores = [
  { titulo: "INTEGRIDAD", texto: "Siempre hacer lo correcto." },
  { titulo: "RESPETO", texto: "Todo el mundo lo merece." },
  {
    titulo: "COMPROMISO",
    texto: "Nos preocupamos día a día en superar las expectativas.",
  },
  { titulo: "CUIDADO", texto: "Ponemos nuestro corazón en el trabajo." },
] as const;

export const tecnologia = {
  titulo: "Tecnología al servicio del cuidado",
  parrafos: [
    "La aplicación permanente de los últimos adelantos tecnológicos disponibles en el mercado mundial de la salud, maximizan la calidad de nuestros servicios a la vez que nos ubican permanentemente en una posición de privilegio frente a otras propuestas del mercado.",
    "En casos específicos, incorporamos equipos inteligentes que garantizan el seguimiento mediante geopresencia y otros avances tecnológicos. Podemos por ejemplo, determinar y registrar los signos vitales del paciente en forma remota; conocer la cantidad de pasos que —ya sea el prestador o el paciente— dieron en un lapso determinado y hasta el circuito efectuado.",
  ],
  /* Párrafo que introduce la marca Helfen View®. */
  destacado:
    "Si bien el contacto humano presencial ha resultado desde siempre el óptimo, ya sea como complemento de ello o bien en los casos en que la presencia física se torna imposible, nuestro exclusivo sistema propietario de seguimiento digital y remoto nos permite mantenerlo a usted junto a todo el equipo profesional a cargo, informados en tiempo real de cualquier novedad ocurrida con el paciente, al tiempo de —solo en los casos autorizados por el responsable a cargo— el monitoreo (visual y/o auditivo) mediante cámaras especialmente instaladas al efecto, vinculadas a nuestro sistema Helfen View®.",
} as const;

export const capacitacion = {
  titulo: "Capacitación permanente",
  texto:
    "Organizamos regularmente jornadas de perfeccionamiento para nuestro personal en centros terciarios y universitarios de excelencia, ya sean propios o bien de nuestros socios estratégicos en la materia.",
} as const;

export const tranquilidad = {
  titulo: "La tranquilidad de un cuidado integral",
  parrafos: [
    "El método aplicado le hará sentir la tranquilidad de estar realizando el máximo esfuerzo humanamente posible para optimizar la calidad de vida y demás cuidados que su ser querido pueda recibir.",
    "Ya no tendrá que preocuparse por ausencias; vacaciones; capacitación; actualización; riesgos laborales —entre otros— por cuanto podrá flexibilizar la dotación convenientemente acorde a las necesidades de demanda que en cada momento correspondan.",
  ],
} as const;

/** Opciones del formulario de contacto. Compartidas por el form y la API. */
export const serviciosFormulario = [
  "Cuidador / Acompañante de Salud",
  "Acompañante Terapéutico",
  "Auxiliar de Enfermería",
  "Enfermero Profesional",
  "Cuidados paliativos",
  "Servicios corporativos",
  "No lo sé todavía / Necesito asesoramiento",
] as const;

export const paliativos = {
  titulo: "Cuidados Paliativos",
  texto:
    "Si lamentablemente el final de vida estuviera próximo, redoblamos nuestros esfuerzos en todo sentido, acompañando tanto al paciente como a su familia, para hacer lo inevitable más llevadero.",
} as const;
