'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedAIBackground from '@/components/animated-ai-background';
import SkillCard from '@/components/skill-card';
import ExperienceTimeline from '@/components/experience-timeline';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Briefcase,
  Code,
  Database,
  Cloud,
  Globe,
  ChevronDown,
  Moon,
  Sun,
  Brain,
  Sparkles,
  Cpu
} from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'ReactJS', 'NextJS', 'VueJS'],
    'Backend': ['Python', 'Django', 'FastAPI', 'Flask', 'PHP', 'Node.js', 'Express.js', 'C#', 'ASP.NET'],
    'Mobile': ['React Native', 'Java', 'Kotlin'],
    'AI/ML': ['Object Detection', 'Face Recognition', 'LLM Fine Tuning', 'Computer Vision', 'Natural Language Processing'],
    'Databases': ['MySQL', 'MongoDB', 'Oracle DB', 'PostgreSQL'],
    'DevOps': ['Linux (RAID/LVM, NFS, SAMBA)', 'RedHat Virtualization', 'Docker', 'Kubernetes', 'Ansible', 'OpenStack'],
    'Cloud': ['AWS (Certified Solution Architect)'],
    'Web Services': ['RESTful APIs', 'JSON', 'OAuth', 'JWT']
  };

  const experience = [
    {
      company: 'SECUODSOFT Pvt Ltd',
      position: 'Sr. Software Engineer',
      period: 'Jan 2025 – Present',
      description: 'Working on Python technology with focus on AI/ML projects including Object Detection, Face Recognition, LLM Fine Tuning. Using Python frameworks like Django, FastAPI, and Flask.',
      type: 'current'
    },
    {
      company: 'Muvi Entertainment Pvt Ltd',
      position: 'Software Engineer',
      period: 'Aug 2022 – Jan 2025',
      description: 'Software development using JS, Vue JS, PHP to develop an OTT SAAS Application (www.muvi.com)',
      type: 'past'
    },
    {
      company: 'Waftage',
      position: 'Software Developer',
      period: 'May 2021 – July 2022',
      description: 'Software development using C#, ASP.NET PHP, NextJS and maintenance (Deputed at Tata Power Southern Odisha Distribution Limited)',
      type: 'past'
    },
    {
      company: 'CMS IT Services',
      position: 'System Administrator',
      period: 'May 2019 – April 2021',
      description: 'Managing Linux/Windows Servers, Setup and Maintenance of Red Hat & oVirt Virtualization, Leading team of 8 Data Center Operators',
      type: 'past'
    },
    {
      company: 'Wipro Ltd (Partner: Renovision)',
      position: 'Data Center Operator',
      period: 'June 2018 – April 2019',
      description: 'Routine check of Server & service status, Application & Database backup, Troubleshooting OS issues, Web Application Development',
      type: 'past'
    },
    {
      company: 'Wipro Ltd.',
      position: 'Administrator IT-Infrastructure',
      period: 'April 2015 – May 2017',
      description: 'Linux/Windows Admin (Data Center), Handling HP and IBM servers, Network management, Web Application Development',
      type: 'past'
    }
  ];

  const projects = [
    {
      title: 'AI/ML Projects',
      company: 'SECUODSOFT Pvt Ltd',
      technologies: ['Python', 'Django', 'FastAPI', 'TensorFlow', 'OpenCV'],
      description: 'Object Detection systems, Face Recognition applications, LLM Fine Tuning for custom AI solutions'
    },
    {
      title: 'Python Web Applications',
      company: 'SECUODSOFT Pvt Ltd',
      technologies: ['Python', 'Django', 'FastAPI', 'Flask'],
      description: 'Developing robust web applications using Python frameworks with AI/ML integration'
    },
    {
      title: 'OTT SAAS Application',
      company: 'Muvi Entertainment',
      technologies: ['JavaScript', 'Vue.js', 'PHP'],
      description: 'Development of comprehensive OTT platform for streaming services'
    },
    {
      title: 'Mobile Applications',
      company: 'CMS IT Services',
      technologies: ['React Native', 'Core Java'],
      description: 'Monthly Attendance Report App, Shift Handover Report App, Caller Identification App'
    },
    {
      title: 'Data Center Management Webapps',
      company: 'CMS IT Services',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      description: 'Datacenter Dashboard, Asset Management, Server Live Status Monitoring, Employee Management'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900 dark:text-white">Abhinav Misra</div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
              <Button variant="ghost" onClick={() => scrollToSection('experience')}>Experience</Button>
              <Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button>
              <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated AI Background */}
        <AnimatedAIBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-900/90 dark:to-slate-800/90 z-10"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.div 
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.div 
                className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center"
                whileHover={{ rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  AM
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Abhinav Misra
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
              <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300">
                Full Stack Developer | AI/ML Engineer
              </h2>
              <Cpu className="h-6 w-6 text-purple-500 animate-pulse" />
            </motion.div>
            
            <motion.p 
              className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              15+ years of experience in software development, system administration, and IT infrastructure. 
              Currently focused on Python development and AI/ML projects including Object Detection, Face Recognition, and LLM Fine Tuning.
              Specialized in creating robust web and mobile applications with expertise in cloud computing and DevOps.
            </motion.p>
          </div>
          
          <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Professional Summary</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Experienced Fullstack Developer with over 15 years in software development, 
                  system administration, and IT infrastructure. Currently working as Sr. Software Engineer 
                  at SECUODSOFT, focusing on Python development and cutting-edge AI/ML projects including 
                  Object Detection, Face Recognition, and LLM Fine Tuning. Proficient in creating robust 
                  web and mobile applications using modern technologies and frameworks.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4" />
                  <span>Bhubaneswar, Odisha, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>Available for opportunities</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Certifications</h3>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">AWS Solution Architect - Associate</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">February 2018</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Red Hat Enterprise Linux (RHEL 7)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Training Completed</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 px-4 bg-white/50 dark:bg-slate-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <ExperienceTimeline experience={experience} />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => {
              const getIcon = (category: string) => {
                switch (category) {
                  case 'Frontend': return <Code className="h-5 w-5 text-white" />;
                  case 'Backend': return <Database className="h-5 w-5 text-white" />;
                  case 'Mobile': return <Phone className="h-5 w-5 text-white" />;
                  case 'AI/ML': return <Brain className="h-5 w-5 text-white" />;
                  case 'Databases': return <Database className="h-5 w-5 text-white" />;
                  case 'DevOps': return <Cloud className="h-5 w-5 text-white" />;
                  case 'Cloud': return <Cloud className="h-5 w-5 text-white" />;
                  case 'Web Services': return <Globe className="h-5 w-5 text-white" />;
                  default: return <Code className="h-5 w-5 text-white" />;
                }
              };

              return (
                <SkillCard
                  key={category}
                  category={category}
                  skills={skillList}
                  icon={getIcon(category)}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-4 bg-white/50 dark:bg-slate-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                  <CardContent className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{project.company}</p>
                    </motion.div>
                    <motion.p 
                      className="text-slate-600 dark:text-slate-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ 
                            scale: 1.1,
                            rotateZ: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Badge variant="outline" className="hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
              <CardContent className="text-center space-y-6">
                <motion.p 
                  className="text-lg text-slate-600 dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Feel free to reach out if you'd like to connect!
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                      sabmisra@gmail.com
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                      +91 8249949227
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-sm text-slate-500 dark:text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Bhubaneswar, Odisha, India
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Abhinav Misra. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}