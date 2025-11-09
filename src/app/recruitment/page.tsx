'use client'

import { useState } from 'react'
import { User, Mail, Phone, MessageSquare, CheckSquare, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    year: '',
  
    email: '',
    whatsapp: '',
    domains: [] as string[],
    message: '',
  })

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']
 
  const domains = ['Cultural', 'Media', 'Technical', 'Sports', 'Design']

  const handleDomainToggle = (domain: string) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domain)
        ? prev.domains.filter(d => d !== domain)
        : [...prev.domains, domain]
    }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.usn || !formData.year  || 
        !formData.email || !formData.whatsapp || formData.domains.length === 0 || !formData.message) {
      alert('Please fill in all required fields!')
      return
    }
     try{
      const response=await fetch('/api/recruitment',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const result =await response.json();
      
      if(result.success){
          console.log('Form submitted:', formData)
          alert('Application submitted successfully!')
           // Reset form
          setFormData({
          name: '',
          usn: '',
           year: '',
         
           email: '',
           whatsapp: '',
          domains: [],
           message: '',
           })
      }else{
        alert("some server error");
        return
      }
     }catch(error:any){
      alert("error submitting form")
      console.log("error",error);
     }
   
    
   
  }

  return (
    <div 
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]" />

      {/* Back Button */}
      <div className="relative z-10 max-w-3xl mx-auto mb-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-3xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-8 sm:p-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recruitment Form
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Join the Vertex family and be part of something amazing!
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-purple-400" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* USN */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              USN (University Seat Number) *
            </label>
            <input
              type="text"
              required
              value={formData.usn}
              onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              placeholder="e.g., 1XX21EC001"
            />
          </div>
     {/* Year */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Year of Study *
            </label>
            <select
              required
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 cursor-pointer"
            >
              <option value="" className="bg-slate-900">Select year</option>
              {years.map((year) => (
                <option key={year} value={year} className="bg-slate-900">
                  {year}
                </option>
              ))}
            </select>
          </div>
       

          <div>
            <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" />
              WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          {/* Domains (Multiple Selection) */}
          <div>
            <label className="block text-white text-sm font-medium mb-3 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-purple-400" />
              Domain(s) to Join * (Select one or more)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {domains.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => handleDomainToggle(domain)}
                  className={`px-4 py-3 rounded-xl border transition-all duration-300 font-medium ${
                    formData.domains.includes(domain)
                      ? 'bg-purple-600/30 border-purple-500 text-white scale-105'
                      : 'bg-slate-800/50 border-purple-500/30 text-gray-400 hover:border-purple-500/50 hover:bg-slate-800/70'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
            {formData.domains.length > 0 && (
              <p className="text-purple-400 text-sm mt-2">
                Selected: {formData.domains.join(', ')}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              Tell us about yourself *
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
              placeholder="Share your interests, skills, and why you want to join Vertex..."
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
   
  )
}