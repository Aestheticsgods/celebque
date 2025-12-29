import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Shield } from 'lucide-react';

const updates = [
  {
    id: 1,
    icon: Sparkles,
    title: 'New design',
    description: 'Redesigned interface for a better user experience',
    date: '2024-01-20',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Improved feed',
    description: 'Discover content faster with our new reels-style feed',
    date: '2024-01-18',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Enhanced security',
    description: 'Two-factor authentication now available',
    date: '2024-01-15',
  },
  {
    id: 4,
    icon: Star,
    title: 'Creator Program',
    description: 'New creator tools: advanced analytics and more',
    date: '2024-01-10',
  },
];

export default function WhatsNew() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 lg:px-8 pb-24 lg:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center animate-glow-pulse">
            <Sparkles size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground">
              What's New
            </h1>
            <p className="text-muted-foreground">
              Latest updates from Celebque
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-elevated rounded-xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {update.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {new Date(update.date).toLocaleDateString('en-US')}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {update.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
