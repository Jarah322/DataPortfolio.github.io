import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Launch Your Data Science Career with a Professional Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-primary-100"
            >
              Stand out from the crowd with a custom portfolio that showcases your data science projects and skills
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Our Portfolio Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-primary-50"
            >
              <RocketLaunchIcon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Get your professional portfolio ready in just 7 days, helping you land interviews faster.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-primary-50"
            >
              <CodeBracketIcon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Industry-Tailored Design</h3>
              <p className="text-gray-600">
                Custom designs that highlight your technical skills and project impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl bg-primary-50"
            >
              <SparklesIcon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Career Impact</h3>
              <p className="text-gray-600">
                Proven to increase interview callbacks and job offers for data professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join hundreds of successful data professionals who landed their dream jobs with our portfolio service.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Your Portfolio Now
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </main>
  )
} 