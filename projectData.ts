export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  liveLink: string;
  frontendRepo: string;
  backendRepo: string;
  images: string[];

  features: {
    tourist?: string[];
    guide?: string[];
    admin?: string[];
  };

  architecture: string;
  challenges: string[];
  performance: string;
  security: string;
  learning: string;
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    id: 'local-guide',

    title: 'Local Guide – Tour Booking Platform',

    shortDescription:
      'A full-stack tour booking platform with role-based authentication, secure payment integration, and protected dashboards for Tourist, Guide, and Admin.',

    techStack: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'Prisma',
      'Tailwind CSS',
      'SSLCommerz',
      'bcrypt',
    ],

    liveLink: 'https://local-guide-frontend-alpha.vercel.app/',
    frontendRepo: 'https://github.com/sisrafilss/local-guide-frontend',
    backendRepo: 'https://github.com/sisrafilss/local-guide-server',

    images: [
      'https://i.ibb.co.com/9m0gF82T/Local-Guide-Dashboard.png',
      'https://i.ibb.co.com/S7Kkd51G/Local-Guide-Home-Page.png',
      'https://i.ibb.co.com/XZ14QYFG/Local-Guide-Tourist-Dashboard.png',
    ],

    features: {
      tourist: [
        'Register & login with JWT authentication',
        'Book a tour',
        'Cancel booked tour from dashboard',
        'View booking history',
      ],
      guide: [
        'Apply via "Become a Guide" form',
        'Admin approval required',
        'Create & manage tour listings',
        'Guide dashboard with booking control',
      ],
      admin: [
        'Manage all users',
        'Approve guide requests',
        'Manage all tours',
        'Control system-wide data from admin dashboard',
      ],
    },

    architecture:
      'Backend follows MVC architecture with separation of routes, controllers, and services. Middleware handles authentication and role-based access control. JWT tokens are verified globally. Database schema is relational using PostgreSQL with scalable references.',

    challenges: [
      'Redesigned database schema multiple times before finalizing a scalable relational structure.',
      'Integrated SSLCommerz payment gateway in both backend and frontend. Faced temporary SSL server issue which required deep debugging and documentation review.',
      'Implemented Next.js middleware.ts for protected routes and role-based access control.',
    ],

    performance:
      'Implemented pagination in dashboards, lazy loading for images, debounced search, and used CSR, SSR, ISR where appropriate. Applied caching for better performance.',

    security:
      'Passwords hashed using bcrypt. JWT tokens with expiration. Environment variables for sensitive data. Input validation middleware before DB operations.',

    learning:
      'Improved understanding of relational database design, payment integration, scalable backend architecture, protected routes in Next.js, and secure authentication.',

    futureImprovements: [
      'Implement unit & integration testing',
      'Add microservice architecture',
      'Improve CI/CD pipeline',
    ],
  },
];
