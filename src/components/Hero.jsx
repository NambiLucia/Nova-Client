import { motion, useSpring, useScroll } from "framer-motion";
import { ArrowRight, Shield, FileText, TrendingUp, Clock, CheckCircle, Lock, BarChart3, Receipt, Coins, FileCheck, Users } from "lucide-react";

function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const features = [
    { icon: FileText, title: "Digital Vouchers", desc: "Create and manage payment vouchers instantly" },
    { icon: Shield, title: "Secure Processing", desc: "Bank-grade encryption for all transactions" },
    { icon: TrendingUp, title: "Financial Analytics", desc: "Track expenses with detailed reports" },
    { icon: Clock, title: "Real-time Updates", desc: "Instant notifications and approvals" }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "500+", label: "Companies" },
    { value: "50K+", label: "Vouchers/Month" },
    { value: "100%", label: "Compliant" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 text-slate-800 min-h-screen">
      
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
          zIndex: 1000,
        }}
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Text Content */}
            <motion.div 
              className="space-y-5 text-center lg:text-left order-2 lg:order-1"
              variants={fadeInLeft}
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
                  <Receipt className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Professional Accounting Solution</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900"
              >
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  NOVA
                </span>{" "}
                Payment Voucher
                <br />
                Management System
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Streamline your accounting workflows with automated payment vouchers, real-time approvals, and comprehensive financial tracking. All in one secure platform.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              >
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg shadow-md hover:shadow-lg border border-slate-200 hover:border-emerald-300 transition-all duration-300 font-medium text-sm"
                >
                  <FileCheck className="w-4 h-4" />
                  View Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              className="flex justify-center order-1 lg:order-2"
              variants={fadeInRight}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Main Card */}
                <motion.div
                  className="relative bg-white rounded-xl shadow-2xl border border-slate-200 p-6 z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Receipt className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Payment Voucher</div>
                        <div className="text-xs text-slate-500">#PV-2024-1847</div>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">Approved</div>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Vendor</span>
                      <span className="font-medium text-slate-900">Office Supplies Ltd.</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Amount</span>
                      <span className="font-bold text-emerald-600 text-lg">$3,450.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Date</span>
                      <span className="font-medium text-slate-900">Nov 27, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Category</span>
                      <span className="font-medium text-slate-900">Operating Expenses</span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span>Created by Finance Team</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span>Approved by Manager</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span>Processing Payment</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-emerald-50 border border-emerald-200 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Lock className="w-5 h-5 text-emerald-600" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Complete Accounting Management
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Everything you need to manage payment vouchers, track expenses, and maintain financial compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Workflow Visual */}
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-emerald-600" />
                  Automated Workflow
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Create Voucher", status: "Complete" },
                    { step: "2", title: "Manager Approval", status: "Complete" },
                    { step: "3", title: "Finance Review", status: "In Progress" },
                    { step: "4", title: "Payment Processing", status: "Pending" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.status === "Complete" ? "bg-emerald-100 text-emerald-700" :
                        item.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                        "bg-slate-200 text-slate-500"
                      }`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.status}</div>
                      </div>
                      {item.status === "Complete" && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight} className="space-y-5 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Streamlined Payment Processing
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automate your entire payment voucher lifecycle from creation to approval to disbursement. Our intelligent workflow ensures every transaction is properly documented, approved, and tracked.
              </p>
              <div className="space-y-3">
                {[
                  "Multi-level approval workflows",
                  "Automated email notifications",
                  "Audit trail for compliance",
                  "Integration with accounting software"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8">
                Your financial data is protected with bank-level encryption and meets international compliance standards
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Lock, label: "256-bit SSL" },
                { icon: Shield, label: "SOC 2 Certified" },
                { icon: FileCheck, label: "GAAP Compliant" },
                { icon: Users, label: "Role-based Access" },
                { icon: Clock, label: "Auto Backups" },
                { icon: CheckCircle, label: "Audit Ready" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-emerald-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Ready to Transform Your Payment Process?
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Join hundreds of companies already using NOVA to streamline their accounting operations
            </p>
            <button 
              onClick={() => window.location.href = '/login'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-500 mt-4">No credit card required • 14-day free trial</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;