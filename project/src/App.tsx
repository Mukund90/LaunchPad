import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Shield, Zap, Check, ChevronDown, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [data,setdata]=useState({
    name : "",
    email : "",
    message:""
  })

  const plans = {
    monthly: [
      { name: 'Starter', price: 29, features: ['5 Team Members', '100GB Storage', 'Basic Support'] },
      { name: 'Pro', price: 99, features: ['15 Team Members', '500GB Storage', 'Priority Support', 'Advanced Analytics'] },
      { name: 'Enterprise', price: 299, features: ['Unlimited Team Members', '2TB Storage', '24/7 Support', 'Custom Solutions', 'API Access'] }
    ],
    yearly: [
      { name: 'Starter', price: 290, features: ['5 Team Members', '100GB Storage', 'Basic Support'] },
      { name: 'Pro', price: 990, features: ['15 Team Members', '500GB Storage', 'Priority Support', 'Advanced Analytics'] },
      { name: 'Enterprise', price: 2990, features: ['Unlimited Team Members', '2TB Storage', '24/7 Support', 'Custom Solutions', 'API Access'] }
    ]
  };

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Our free trial gives you full access to all features for 14 days. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No, all our plans are month-to-month or annual with no long-term commitment required.'
    }
  ];
 return (
    <div className="min-h-screen shooting-stars-bg">
      <nav className="container mx-auto px-6 py-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-white">Launchpad</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-200 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-200 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-200 hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-slate-200 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </nav>


      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-orange-600 mb-8">
            Launch Your <span className='text-white'>Startup</span>
            <span className="text-green-700"> Faster</span>
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Everything you need to get your startup off the ground. Simple, powerful, and designed for modern teams.
          </p>
         
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Dashboard Preview"
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>
        <div id="features" className="mt-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Why Choose LaunchPad?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Team Collaboration</h3>
              <p className="text-white">Work together seamlessly with your team in real-time.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Enterprise Security</h3>
              <p className="text-white">Bank-grade security to keep your data safe and protected.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Lightning Fast</h3>
              <p className="text-white">Optimized performance for the smoothest experience.</p>
            </motion.div>
          </div>
        </div>

        <div id="pricing" className="mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Simple, Transparent Pricing</h2>
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-full ${
                  selectedPlan === 'monthly' ? 'bg-white shadow-md' : ''
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-2 rounded-full ${
                  selectedPlan === 'yearly' ? 'bg-white shadow-md' : ''
                }`}
              >
                Yearly (20% off)
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans[selectedPlan as keyof typeof plans].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="faq" className="mt-32">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        <div id="contact" className="mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-white">Have questions? We're here to help.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-white">contact@launchpad.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-white">123 Startup Street, SF, CA 94107</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e)=>setdata({...data,name:e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e)=>setdata({...data,email:e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  onChange={(e)=>setdata({...data,message:e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
        <footer className="mt-32 border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-indigo-600" />
                <span className="text-xl font-bold text-white">LaunchPad</span>
              </div>
              <p className="text-white">
                Empowering startups to reach new heights with powerful tools and seamless collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white hover:text-indigo-600">Features</a></li>
                <li><a href="#pricing" className="text-white hover:text-indigo-600">Pricing</a></li>
                <li><a href="#" className="text-white hover:text-indigo-600">Documentation</a></li>
                <li><a href="#" className="text-white hover:text-indigo-600">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-indigo-600">About</a></li>
                <li><a href="#" className="text-white hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="text-white hover:text-indigo-600">Careers</a></li>
                <li><a href="#contact" className="text-white hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-indigo-600">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-indigo-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-indigo-600">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 pb-12">
            <p className="text-center text-white">
              © 2025 LaunchPad. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;