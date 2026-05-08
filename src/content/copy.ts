export const copy = {
  meta: {
    title: 'BR Safety — Auditoría y Pentest para PYMEs | España',
    description: 'Auditamos webs, infraestructura y redes de PYMEs españolas. Encontramos lo que buscan los atacantes antes que ellos. Sin humo, con informe. Pide tu auditoría.',
    ogImage: '/og.png',
  },
  nav: {
    logo: 'BR Safety',
    claim: 'auditoría · pentest · respuesta',
    links: ['Servicios', 'Trabajos', 'Contacto'],
    cta: 'Pedir auditoría',
  },
  hero: {
    eyebrow: 'Escaneando 4.218 superficies en vivo',
    h1Line1: 'Tu empresa,',
    h1Line2: 'blindada.',
    h1Line3: 'Antes que ellos.',
    sub: 'Dependéis de lo digital pero no tenéis un equipo de seguridad propio. Auditamos vuestra web, infraestructura y red Wi-Fi —y os entregamos exactamente lo que escanean los atacantes, antes que ellos.',
    ctaPrimary: 'Pedir auditoría →',
    ctaSecondary: 'Cómo trabajamos →',
    globeCaption: 'Superficie de ataque de una PYME tipo',
  },
  services: {
    sectionTitle: 'Servicios',
    sectionSub: 'Cuatro superficies de ataque. Una metodología. Sin sorpresas en el informe.',
    items: [
      {
        num: '01',
        title: 'Auditoría Web',
        pitch: 'Tu web tiene lógica de negocio, APIs y sesiones. Los atacantes lo saben. Nosotros lo revisamos todo antes que ellos.',
        tags: ['OWASP Top 10', 'APIs REST/GraphQL', 'SPAs'],
        bullets: ['Análisis de lógica de negocio y control de acceso', 'Pruebas de autenticación, sesiones y tokens', 'Revisión de configuración del servidor y cabeceras HTTP'],
      },
      {
        num: '02',
        title: 'Infraestructura & Cloud',
        pitch: 'Un bucket S3 público o un rol IAM demasiado permisivo pueden costar más que toda la auditoría. Los cerramos.',
        tags: ['AWS', 'GCP', 'Azure', 'On-prem'],
        bullets: ['Revisión de políticas IAM y permisos por mínimo privilegio', 'Detección de servicios expuestos en red pública', 'Auditoría de configuración de Kubernetes y contenedores'],
      },
      {
        num: '03',
        title: 'Wi-Fi & Redes',
        pitch: 'Si alguien desde el aparcamiento puede conectarse a vuestra red corporativa, tenéis un problema. Lo detectamos.',
        tags: ['WPA3', 'Rogue AP', '802.1X'],
        bullets: ['Detección y eliminación de puntos de acceso no autorizados', 'Revisión y refuerzo de segmentación de red', 'Implementación y pruebas de autenticación 802.1X'],
      },
      {
        num: '04',
        title: 'Red Team',
        pitch: 'Simulamos un atacante real: phishing, acceso físico, OSINT. Sabréis exactamente hasta dónde puede llegar alguien con malas intenciones.',
        tags: ['Phishing dirigido', 'Intrusión física', 'OSINT'],
        bullets: ['Campañas de phishing personalizadas contra vuestro equipo', 'Pruebas de acceso físico a instalaciones y sala de servidores', 'Reconocimiento OSINT de vuestra superficie pública'],
      },
    ],
  },
  caseStudies: {
    sectionTitle: 'Lo que hemos encontrado',
    sectionSub: 'Casos reales, datos anonimizados. El atacante no firma NDA.',
    disclaimer: 'Casos representativos. Sin datos identificativos por acuerdo de confidencialidad con el cliente.',
    items: [
      {
        sector: 'Retail · 35 empleados',
        service: 'Auditoría Web',
        metric: '2 semanas',
        metricLabel: 'de IDOR a parche desplegado',
        description: 'Su API REST exponía pedidos de cualquier cliente con solo cambiar un ID en la URL. Un atacante podía exfiltrar el historial completo de compras. Detectado, documentado y corregido en dos semanas sin parar la tienda.',
      },
      {
        sector: 'Despacho jurídico · 12 empleados',
        service: 'Wi-Fi & Redes',
        metric: '3 Rogue APs',
        metricLabel: 'activos en la red corporativa',
        description: 'Tres puntos de acceso no autorizados llevaban meses activos en la red donde circulaban expedientes de clientes. Implementamos segmentación 802.1X y WPA3 en una tarde, sin interrumpir ninguna vista.',
      },
      {
        sector: 'SaaS B2B · 60 empleados',
        service: 'Infraestructura & Cloud',
        metric: '3 buckets S3',
        metricLabel: 'con datos de clientes expuestos',
        description: 'Auditoría de AWS reveló tres buckets públicos con contratos y exports de base de datos, más roles IAM con permisos de administrador sin usar. Todo corregido en menos de 48 horas desde el informe.',
      },
      {
        sector: 'Industrial · 80 empleados',
        service: 'Red Team',
        metric: '100%',
        metricLabel: 'de acceso físico logrado',
        description: 'Mediante phishing dirigido e ingeniería social llegamos a la sala de servidores sin levantar ninguna alerta interna. El cliente recibió un plan de mejora a 90 días con acciones priorizadas por impacto real.',
      },
    ],
  },
  contact: {
    sectionTitle: '¿Qué estáis exponiendo sin saberlo?',
    sectionSub: 'Contadnos qué protegéis. Sin compromiso, respondemos en menos de 24 horas laborables.',
    formLabels: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Email corporativo',
      service: 'Tipo de servicio',
      message: 'Mensaje',
      rgpd: 'He leído y acepto la política de privacidad',
      submit: 'Enviar solicitud →',
      submitting: 'Enviando_',
    },
    formPlaceholders: {
      name: 'Tu nombre y apellido',
      company: 'Nombre de vuestra empresa',
      email: 'tu@empresa.com',
      service: 'Selecciona un servicio',
      message: '¿Qué queréis auditar? ¿Hay algún incidente reciente o preocupación concreta?',
    },
    serviceOptions: [
      'Auditoría Web',
      'Infraestructura & Cloud',
      'Wi-Fi & Redes',
      'Red Team',
      'No estoy seguro, quiero orientación',
    ],
    successMessage: 'Solicitud recibida. Os contactamos en menos de 24 horas laborables.',
    errorMessage: 'Algo ha fallado al enviar. Escríbenos directamente a contact@brsafety.com',
    rateLimitMessage: 'Demasiados envíos seguidos. Espera unos minutos e inténtalo de nuevo.',
    altContact: {
      email: 'contact@brsafety.com',
      location: 'Madrid, España',
      response: 'Respuesta en < 24h laborables',
    },
  },
  howItWorks: {
    sectionTitle: 'Cómo trabajamos',
    sectionSub: 'Sin sorpresas. Sin letra pequeña. Sin interrumpir vuestra actividad.',
    steps: [
      {
        num: '01',
        title: 'Diagnóstico gratuito',
        desc: 'Una llamada de 30 minutos para entender qué protegéis, cómo está montado y qué os preocupa. Sin compromiso.',
      },
      {
        num: '02',
        title: 'Auditoría acordada',
        desc: 'Definimos el alcance juntos y empezamos. La mayoría de auditorías duran entre 1 y 3 semanas según el tipo y tamaño.',
      },
      {
        num: '03',
        title: 'Informe doble',
        desc: 'Un informe ejecutivo para dirección y uno técnico para IT. Con severidad, evidencias y solución para cada hallazgo.',
      },
      {
        num: '04',
        title: 'Seguimiento incluido',
        desc: 'Una vez aplicados los parches, verificamos que los problemas están realmente cerrados. Sin coste adicional.',
      },
    ],
  },
  trust: {
    items: [
      { label: 'Metodología', value: 'OWASP · PTES · NIST' },
      { label: 'Informe', value: 'Ejecutivo + Técnico' },
      { label: 'Tiempo de entrega', value: '1 – 3 semanas' },
      { label: 'Seguimiento', value: 'Incluido sin coste' },
    ],
  },
  faq: {
    sectionTitle: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto cuesta una auditoría?',
        a: 'Depende del alcance. Una auditoría web para una PYME parte desde 1.500 €. Pedid presupuesto sin compromiso —respondemos en menos de 24 horas con una estimación clara.',
      },
      {
        q: '¿Interrumpís la actividad de la empresa?',
        a: 'No. Trabajamos en modo no destructivo por defecto. Las pruebas se coordinan con vosotros para evitar cualquier impacto en producción.',
      },
      {
        q: '¿Cuánto tarda una auditoría?',
        a: 'Entre 1 y 3 semanas según el tipo y tamaño. Al inicio acordamos una fecha de entrega del informe y la cumplimos.',
      },
      {
        q: '¿Qué recibimos al final?',
        a: 'Un informe ejecutivo (para dirección, sin tecnicismos) y uno técnico (para IT, con evidencias y pasos exactos para corregir cada hallazgo).',
      },
      {
        q: '¿Tenemos que daros acceso a todo?',
        a: 'Solo accedéis a lo que hayamos definido juntos en el alcance, firmado en un contrato de confidencialidad antes de empezar.',
      },
    ],
  },
  footer: {
    claim: 'auditoría · pentest · respuesta',
    columns: {
      services: {
        title: 'Servicios',
        links: ['Auditoría Web', 'Infra & Cloud', 'Wi-Fi & Redes', 'Red Team'],
      },
      company: {
        title: 'Empresa',
        links: ['Contacto'],
      },
      legal: {
        title: 'Legal',
        links: ['Aviso legal', 'Privacidad', 'Cookies'],
      },
    },
    terminal: '> uptime since 2024 · status: operational · 0 incidents',
    copyright: '© BR Safety S.L. Todos los derechos reservados.',
  },
} as const;

export type Copy = typeof copy;
