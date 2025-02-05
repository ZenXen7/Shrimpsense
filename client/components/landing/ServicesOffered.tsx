import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Monitoring",
    price: "$99",
    period: "per month",
    features: ["Real-time water quality monitoring", "Basic AI-driven insights", "Mobile app access", "Email support", "Contact"],
  },
  {
    name: "Advanced Analytics",
    price: "$199",
    period: "per month",
    features: [
      "All Basic Monitoring features",
      "Advanced AI predictions",
      "Customizable alerts",
      "Disease risk assessment",
      "Priority support",
    ],
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    period: "contact us",
    features: [
      "All Advanced Analytics features",
      "Multi-pond management",
      "Integration with existing systems",
      "On-site consultation",
      "24/7 dedicated support",
    ],
  },
]

const ServicesOffered = () => {
  return (
    <section className="py-2 border-t border-gray">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl border border-blue-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4">
                <button className="w-full mb-5 bg-blue-900 text-white rounded-md py-2 hover:bg-[#1E40AF] transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOffered

