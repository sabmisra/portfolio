'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  type: 'current' | 'past';
}

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className={`p-6 relative overflow-hidden group ${
            exp.type === 'current' 
              ? 'border-blue-500 border-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950' 
              : 'hover:shadow-xl transition-all duration-300'
          }`}>
            {/* Animated Background for Current Position */}
            {exp.type === 'current' && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-5"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #6366f1)",
                    "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
            
            <CardContent className="space-y-3 relative z-10">
              <motion.div 
                className="flex flex-col md:flex-row md:items-center md:justify-between"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2">
                  <motion.h3 
                    className="text-xl font-semibold text-slate-900 dark:text-white"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.position}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-slate-600 dark:text-slate-300 flex items-center gap-2"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </motion.p>
                </div>
                
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</span>
                  {exp.type === 'current' && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                        Current
                      </Badge>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              
              <motion.p 
                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {exp.description}
              </motion.p>
              
              {/* Decorative Elements */}
              {exp.type === 'current' && (
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}