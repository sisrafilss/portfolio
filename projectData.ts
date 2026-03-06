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
  {
    id: 'delivraze',

    title: 'Delivraze – Parcel Delivery Management System',

    shortDescription:
      'A full-stack parcel delivery management platform that allows senders to request parcel pickups, enables receivers to track incoming deliveries, and provides admins with complete control over parcel operations and system management.',

    techStack: [
      'React',
      'Redux Toolkit (RTK Query)',
      'ShadCN UI',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Zod',
    ],

    liveLink: 'https://delivraze-percel-delivery-frontend.vercel.app/',
    frontendRepo:
      'http://github.com/sisrafilss/Delivraze-percel-delivery-frontend',
    backendRepo:
      'https://github.com/sisrafilss/Delivraze-percel-delivery-backend',

    images: [
      'https://i.ibb.co.com/jkhGB1Z8/Screenshot-2026-03-06-200412.png',
      'https://i.ibb.co.com/7JNzcb5s/Screenshot-2026-03-06-200435.png',
      'https://i.ibb.co.com/dsmVTvXH/Screenshot-2026-03-06-200507.png',
      'https://i.ibb.co.com/QvxgZz6s/Screenshot-2026-03-06-200549.png',
      'https://i.ibb.co.com/5QcPXB0/Screenshot-2026-03-06-200609.png',
      'https://i.ibb.co.com/7JDQgv9J/Screenshot-2026-03-06-200705.png',
      'https://i.ibb.co.com/3mTgV5Bc/Screenshot-2026-03-06-200716.png',
      'https://i.ibb.co.com/ZzswmsGs/Screenshot-2026-03-06-200735.png',
    ],

    features: {
      tourist: [
        'Users can register and log in as a sender.',
        'Place parcel pickup requests from their location.',
        'View real-time delivery status such as pending, picked, on the way, cancelled, or delivered.',
        'Cancel a pickup request before the parcel is collected.',
        'Confirm delivery from the sender dashboard once the parcel reaches the receiver.',
      ],
      guide: [
        'Users can register as receivers.',
        'View all incoming parcels addressed to them.',
        'Track parcel status including pending, accepted, and on the way.',
        'Mark parcels as delivered once received.',
        'Track parcels using a unique parcel tracking code.',
      ],
      admin: [
        'Manage users including blocking, unblocking, and viewing user details.',
        'Manage all parcel records including editing parcel information, blocking, deleting, and tracking shipments.',
        'Monitor platform statistics such as total parcels, accepted shipments, pending deliveries, and shipment trends.',
        'View operational summaries and shipment analytics from the admin dashboard.',
      ],
    },

    architecture:
      'Backend follows MVC architecture with clear separation of routes, controllers, and services. Middleware handles authentication and role-based access control. JWT tokens are verified globally. MongoDB is used as the database with Mongoose schemas for structured data modeling, and Zod is used for request validation.',

    challenges: [
      'Designing a flexible parcel tracking system with unique tracking codes while maintaining efficient database queries.',
      'Implementing role-based dashboards for sender, receiver, and admin with secure access control.',
      'Handling real-time parcel status updates across different user roles while maintaining data consistency.',
    ],

    performance:
      'Implemented efficient API data fetching using RTK Query with caching and automatic state updates. Optimized database queries with proper indexing in MongoDB and minimized unnecessary re-renders on the frontend.',

    security:
      'Passwords are securely hashed using bcrypt. JWT authentication is used with protected routes and role-based middleware. Zod validation ensures request payloads are validated before processing.',

    learning:
      'Gained deeper experience building scalable REST APIs, implementing role-based systems, and designing parcel tracking workflows. Improved understanding of MongoDB schema design and efficient state management using Redux Toolkit.',

    futureImprovements: [
      'Implement real-time parcel tracking using WebSockets.',
      'Add notification system for shipment updates.',
      'Integrate automated testing and CI/CD pipelines.',
    ],
  },
];

/*

Project Name: Delivraze – Parcel Delivery Management System

Description: write a proper description based on other data.

Live: https://delivraze-percel-delivery-frontend.vercel.app/
Frontend Repo: http://github.com/sisrafilss/Delivraze-percel-delivery-frontend
Backend Repo: https://github.com/sisrafilss/Delivraze-percel-delivery-backend

Key Features
Sender:
* A user can register as sender.
* Registered sender can place a parcel picking requst
* After approve by admin, a delivery man will pick the parcel from the sender's given location.
* Parcel will be delivered to the receiver, according to the given address of sender.
* Sender will see the transportation status (picked, on the way, cancelled, delivered, etc) in the sender dashboard.
* Sender can confirm delivery and cancel a picking request before it picked by the delivery man.

Receiver:
* Any user can register as receiver.
* Receiver can see all the incomming parcel, (parcel that are comming to him/her)
* They can mark a parcel as delivered
* Receiver can see the parcel status, (pending, accecpted, on the way, etc), and mark a parcel as delivered.
* Also can track a parcel by unique parcel tracking code.

Admin:
* Admin can manage users (block, unblock, see),
* Manage all parcels (edit parcel info, block, unblock, delete, see detail, track etc,)
* Admin can see the short summary (statistics) like total parcel, total accepted, total pending, parcel trandes, monthly shipment, etc on admin dashboard.

Tech Stack:  React, Redux (RTK Query), ShadCN, Express.js, MongoDB, Mongoose, etc.

Architecture & Backend Design
Backend follows MVC architecture with separation of routes, controllers, and services. Middleware handles authentication and role-based access control. JWT tokens are verified globally. Used mongodb for database and mongoose for schema. Used ZOD for schema validation.

Challenges & Solutions
Include 2-3 three common challange and overcome technique relavant to this kind of project by your own.

Performance Optimization
Write 2-3 lines by relavant data.

Security Considerations
Write 2-3 lines by relavant data.

What I Learned
Write 2-3 lines by relavant data.

Future Improvements
Write 2-3 lines by relavant data.







*/
