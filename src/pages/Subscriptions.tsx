import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BadgeCheck, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subscriptions } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

export default function Subscriptions() {
  const { user } = useAuth();
  const userSubscriptions = subscriptions.filter(s => s.userId === user?.id);

  return (
    <div className="min-h-screen bg-background py-8 px-4 lg:px-8 pb-24 lg:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="font-display font-bold text-3xl text-foreground mb-2">
          My Subscriptions
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage your creator subscriptions
        </p>

        {userSubscriptions.length > 0 ? (
          <div className="space-y-4">
            {userSubscriptions.map((subscription, index) => (
              <motion.div
                key={subscription.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-elevated rounded-2xl p-5"
              >
                <Link
                  to={`/creators/${subscription.creatorId}`}
                  className="flex items-center gap-4 mb-4"
                >
                  <img
                    src={subscription.creator.avatar}
                    alt={subscription.creator.displayName}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">
                        {subscription.creator.displayName}
                      </span>
                      {subscription.creator.isVerified && (
                        <BadgeCheck size={16} className="text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      @{subscription.creator.username}
                    </p>
                  </div>
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>
                      Renewal: {new Date(subscription.endDate).toLocaleDateString('en-US')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">
                      €{subscription.creator.subscriptionPrice}/month
                    </span>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      Cancel
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-elevated rounded-2xl">
            <Users size={48} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="font-semibold text-lg text-foreground mb-2">
              No subscriptions
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover creators and subscribe to access their exclusive content
            </p>
            <Link to="/discover">
              <Button variant="gradient">
                Discover creators
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
