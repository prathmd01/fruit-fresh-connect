import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Package, 
  Calendar,
  ArrowRight,
  Bell,
  Plus,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const nearbyMandis = [
  { name: "Azadpur Mandi", location: "Delhi", distance: "12 km", banana: 18, mango: 45, papaya: 22, trend: "up" },
  { name: "Ghazipur Mandi", location: "Delhi", distance: "8 km", banana: 17, mango: 43, papaya: 21, trend: "down" },
  { name: "Okhla Mandi", location: "Delhi", distance: "15 km", banana: 19, mango: 46, papaya: 23, trend: "up" },
  { name: "Narela Mandi", location: "Delhi", distance: "25 km", banana: 16, mango: 42, papaya: 20, trend: "down" },
];

const myListings = [
  { id: 1, fruit: "Banana", quantity: "500 kg", harvestDate: "15 Jan 2024", status: "Listed", rate: 18 },
  { id: 2, fruit: "Mango", quantity: "200 kg", harvestDate: "20 Jan 2024", status: "In Ripening", rate: 45 },
  { id: 3, fruit: "Papaya", quantity: "300 kg", harvestDate: "12 Jan 2024", status: "Sold", rate: 22 },
];

const FarmerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Compare mandi rates and manage your produce.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Alerts
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  List Produce
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Listings", value: "3", icon: Package, color: "primary" },
              { label: "Avg. Rate Today", value: "₹18/kg", icon: TrendingUp, color: "success" },
              { label: "After Ripening", value: "₹24/kg", icon: TrendingUp, color: "secondary" },
              { label: "Potential Earning", value: "+30%", icon: TrendingUp, color: "primary" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Nearby Mandi Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-card overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">Nearby Mandi Rates</h2>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Live • Updated 5 min ago
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-sm">Mandi</th>
                      <th className="text-center p-4 font-semibold text-sm">🍌 Banana</th>
                      <th className="text-center p-4 font-semibold text-sm">🥭 Mango</th>
                      <th className="text-center p-4 font-semibold text-sm">🍈 Papaya</th>
                      <th className="text-center p-4 font-semibold text-sm">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nearbyMandis.map((mandi, index) => (
                      <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <p className="font-semibold text-foreground">{mandi.name}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {mandi.location}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-bold text-foreground">₹{mandi.banana}/kg</span>
                          <div className={`flex items-center justify-center gap-1 text-xs ${mandi.trend === "up" ? "text-success" : "text-destructive"}`}>
                            {mandi.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-bold text-foreground">₹{mandi.mango}/kg</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-bold text-foreground">₹{mandi.papaya}/kg</span>
                        </td>
                        <td className="p-4 text-center text-sm text-muted-foreground">{mandi.distance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-secondary">Best rate:</span> Okhla Mandi - ₹19/kg for Banana
                  </p>
                  <Button variant="link" size="sm">
                    View All Mandis <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Ripening Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border shadow-card p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Ripening Calculator</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">If you sell 500kg Banana raw today</p>
                  <p className="text-2xl font-bold text-foreground">₹9,000</p>
                  <p className="text-xs text-muted-foreground">@ ₹18/kg</p>
                </div>
                <div className="bg-gradient-primary rounded-xl p-4 text-primary-foreground">
                  <p className="text-sm opacity-80 mb-1">After ripening (3-4 days)</p>
                  <p className="text-2xl font-bold">₹12,000</p>
                  <p className="text-xs opacity-80">@ ₹24/kg (+30% hike)</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Extra Earning</span>
                    <span className="font-bold text-success">+₹3,000</span>
                  </div>
                </div>
                <Button className="w-full">
                  Connect with Ripening Agent
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* My Listings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">My Listings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-sm">Fruit</th>
                    <th className="text-left p-4 font-semibold text-sm">Quantity</th>
                    <th className="text-left p-4 font-semibold text-sm">Harvest Date</th>
                    <th className="text-left p-4 font-semibold text-sm">Rate</th>
                    <th className="text-left p-4 font-semibold text-sm">Status</th>
                    <th className="text-left p-4 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myListings.map((listing) => (
                    <tr key={listing.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{listing.fruit}</td>
                      <td className="p-4 text-foreground">{listing.quantity}</td>
                      <td className="p-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {listing.harvestDate}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-foreground">₹{listing.rate}/kg</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          listing.status === "Listed" ? "bg-primary/10 text-primary" :
                          listing.status === "In Ripening" ? "bg-secondary/10 text-secondary" :
                          "bg-success/10 text-success"
                        }`}>
                          {listing.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
