'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Globe, Phone, Brain } from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export default function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  const getGradientColor = (category: string) => {
    const gradients = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Mobile': 'from-purple-500 to-pink-500',
      'AI/ML': 'from-pink-500 to-rose-500',
      'Databases': 'from-orange-500 to-amber-500',
      'DevOps': 'from-red-500 to-orange-500',
      'Cloud': 'from-cyan-500 to-blue-500',
      'Web Services': 'from-indigo-500 to-purple-500'
    };
    return gradients[category as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
    >
      <Card className={`p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${getGradientColor(category)} bg-opacity-10 backdrop-blur-sm border-opacity-20`}>
        <CardContent className="space-y-4">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`p-2 rounded-lg bg-gradient-to-r ${getGradientColor(category)}`}>
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category}</h3>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 + skillIndex * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${getGradientColor(category)} text-white border-0 hover:shadow-lg transition-all duration-300`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}