'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail() {
  const images = [
    'https://i.ibb.co.com/9m0gF82T/Local-Guide-Dashboard.png',
    'https://i.ibb.co.com/S7Kkd51G/Local-Guide-Home-Page.png',
    'https://i.ibb.co.com/XZ14QYFG/Local-Guide-Tourist-Dashboard.png',
  ];

  return (
    <div className="min-h-screen bg-background px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* 1. Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            ShopSphere – Full Stack E-Commerce Platform
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
            A production-ready MERN stack e-commerce application featuring
            role-based authentication, secure payments, and an admin dashboard
            for managing products and orders.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank">
                <Github className="w-4 h-4 mr-2" /> Frontend GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank">
                <Github className="w-4 h-4 mr-2" /> Backend GitHub
              </a>
            </Button>
          </div>
        </motion.section>

        <Separator />

        {/* 2. Screenshots */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-8">Local Guide</h1>

          <ProjectGallery images={images} />
        </div>

        <Separator />

        {/* 3. Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>User Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• JWT Authentication & Authorization</p>
                <p>• Add to Cart & Secure Checkout</p>
                <p>• Order Tracking System</p>
                <p>• Profile Management</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Admin Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Product CRUD Operations</p>
                <p>• User Role Management</p>
                <p>• Order Status Control</p>
                <p>• Sales Analytics Dashboard</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 4. Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js',
              'React',
              'Tailwind CSS',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Mongoose',
              'JWT',
              'Stripe',
              'Cloudinary',
            ].map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* 5. Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Architecture & Backend Design
          </h2>
          <p className="text-muted-foreground max-w-4xl text-sm md:text-base">
            The backend follows MVC architecture with clear separation of
            routes, controllers, and services. Middleware is used for
            authentication and role-based access control. JWT tokens are
            verified globally, and admin-only routes are protected using
            role-check middleware. The database schema is designed with
            references for scalable product-order relationships.
          </p>
        </section>

        <Separator />

        {/* 6. Challenges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
          <div className="space-y-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Multiple API Calls in useEffect</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Resolved repeated API calls by fixing dependency arrays and
                memoizing functions with useCallback.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Cart State Reset on Refresh</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Implemented localStorage persistence and backend synchronization
                for consistent cart state.
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 7. Performance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Performance Optimization</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Implemented pagination for product listing, lazy loading for images,
            debounced search queries, and MongoDB indexing on frequently queried
            fields.
          </p>
        </section>

        <Separator />

        {/* 8. Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Security Considerations</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Passwords are hashed using bcrypt. JWT tokens have expiration.
            Sensitive credentials are stored in environment variables. Input
            validation is applied using middleware before database operations.
          </p>
        </section>

        <Separator />

        {/* 9. Learning */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            This project strengthened my understanding of scalable backend
            architecture, REST API design, state management in large React apps,
            and implementing secure authentication systems.
          </p>
        </section>

        <Separator />

        {/* 10. Future Improvements */}
        <section className="space-y-4 pb-10">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <ul className="text-muted-foreground text-sm md:text-base space-y-2">
            <li>• Add Redis caching</li>
            <li>• Implement unit & integration testing</li>
            <li>• Add microservice architecture</li>
            <li>• Improve CI/CD pipeline</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
