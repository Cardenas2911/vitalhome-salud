import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Phone, 
  MapPin, 
  Activity, 
  Stethoscope, 
  Calendar, 
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Mail,
  ShieldCheck
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Contacto', icon: User },
  { id: 2, title: 'Clínico', icon: Activity },
  { id: 3, title: 'Detalles', icon: Calendar }
];

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pathology: '',
    specialty: '',
    urgency: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    // Basic validation for step 1
    if (currentStep === 1) {
      if (!formData.name || !formData.phone) {
        alert("Por favor complete los campos obligatorios.");
        return;
      }
    }
    // Basic validation for step 2
    if (currentStep === 2) {
      if (!formData.address || !formData.pathology) {
        alert("Por favor complete los campos obligatorios.");
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };
  
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[40px] p-8 md:p-16 text-center shadow-2xl border border-slate-100 max-w-2xl mx-auto"
      >
        <div className="size-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="size-12 text-[#155ec0]" />
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-[#011633] mb-6 font-heading">¡Solicitud Enviada!</h3>
        <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">
          Gracias por confiar en VitalHome Salud. <br className="hidden md:block" />
          Un coordinador clínico analizará su caso y se comunicará con usted en menos de 15 minutos.
        </p>
        <div className="bg-[#f8fafc] rounded-3xl p-6 mb-10 inline-block">
          <p className="text-[#061a36] font-black text-[10px] uppercase tracking-widest mb-2">Resumen de Seguimiento</p>
          <p className="text-[#155ec0] font-bold text-lg">Ticket #{Math.floor(Math.random() * 90000) + 10000}</p>
        </div>
        <br />
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              name: '',
              phone: '',
              email: '',
              address: '',
              pathology: '',
              specialty: '',
              urgency: '',
              message: ''
            });
          }}
          className="text-[#155ec0] font-black text-xs uppercase tracking-widest border-b-2 border-[#155ec0] pb-1 hover:text-[#061a36] hover:border-[#061a36] transition-all cursor-pointer"
        >
          Enviar otra consulta
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#155ec0]/5 blur-3xl rounded-full" />
      
      {/* Header Form */}
      <div className="mb-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-[#011633] font-heading mb-4">
          Nueva Solicitud <span className="text-[#155ec0]">Clínica</span>
        </h3>
        <p className="text-slate-500 font-medium">Complete los pasos para recibir una propuesta de cuidado integral.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-16 relative z-10 px-4">
        <div className="absolute top-5 left-10 right-10 h-[2px] bg-slate-100 -z-10" />
        <motion.div 
          className="absolute top-5 left-10 h-[2px] bg-[#155ec0] -z-10"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 75}%` }}
          style={{ maxWidth: '85%' }}
        />
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: currentStep === step.id ? 1.1 : 1,
                backgroundColor: currentStep >= step.id ? '#155ec0' : '#ffffff',
                borderColor: currentStep >= step.id ? '#155ec0' : '#e2e8f0',
                color: currentStep >= step.id ? '#ffffff' : '#94a3b8'
              }}
              className="size-10 rounded-full flex items-center justify-center border-2 transition-colors z-10 bg-white shadow-sm"
            >
              <step.icon className="size-5" />
            </motion.div>
            <span className={`text-[10px] font-black uppercase tracking-tighter mt-3 transition-colors ${currentStep >= step.id ? 'text-[#155ec0]' : 'text-slate-400'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div 
              key="step1"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                  <input 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Ej: Roberto Gomez" 
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-6 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                    WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                    <input 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="313 000 0000" 
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-6 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="ejemplo@correo.com" 
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-6 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div 
              key="step2"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                  Dirección de Residencia <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                  <input 
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Ej: Calle 127 # 7-10, Bogotá" 
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-6 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                  Tipo de Patología Principal <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Activity className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                  <select 
                    name="pathology"
                    required
                    value={formData.pathology}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-12 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Seleccione patología...</option>
                    <option value="diabetes">Diabetes / Hipertensión</option>
                    <option value="alzheimer">Alzheimer / Demencia</option>
                    <option value="post-operatorio">Recuperación Post-Operatoria</option>
                    <option value="respiratorio">Enfermedad Respiratoria</option>
                    <option value="paliativo">Cuidado Paliativo / Crónico</option>
                    <option value="movilidad">Limitación de Movilidad</option>
                    <option value="otros">Otras / Varias</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div 
              key="step3"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                  Especialidad Requerida <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Stethoscope className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                  <select 
                    name="specialty"
                    required
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-12 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Seleccione especialidad...</option>
                    <option value="enfermeria">Enfermería Domiciliaria</option>
                    <option value="medicina">Médico en Casa</option>
                    <option value="terapia">Terapias / Rehabilitación</option>
                    <option value="pediatria">Cuidados Pediátricos</option>
                    <option value="psicologia">Bienestar Mental</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 size-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#061a36] uppercase tracking-[0.2em] ml-2">Mensaje o Requerimientos Especiales</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-6 top-6 size-5 text-slate-400 group-focus-within:text-[#155ec0] transition-colors" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntenos un poco más sobre lo que necesita para su familiar..." 
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl pl-14 pr-6 py-5 text-[#061a36] font-semibold focus:ring-4 focus:ring-[#155ec0]/5 focus:border-[#155ec0] outline-none transition-all resize-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row gap-4 pt-10 mt-6 border-t border-slate-50">
          {currentStep > 1 && (
            <button 
              type="button"
              onClick={handlePrev}
              className="flex-1 flex items-center justify-center gap-3 border-2 border-slate-100 hover:border-[#155ec0] text-[#061a36] font-black text-[12px] uppercase tracking-[0.2em] py-5 rounded-2xl transition-all hover:bg-slate-50 cursor-pointer"
            >
              <ArrowLeft className="size-4" /> Anterior
            </button>
          )}
          
          {currentStep < steps.length ? (
            <button 
              type="button"
              onClick={handleNext}
              className="flex-[2] bg-[#155ec0] hover:bg-[#061a36] text-white flex items-center justify-center gap-3 font-black text-[12px] uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_20px_40px_rgba(21,94,192,0.2)] hover:shadow-[0_20px_40px_rgba(21,94,192,0.4)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              Siguiente Paso <ArrowRight className="size-4" />
            </button>
          ) : (
            <button 
              type="submit"
              className="flex-[2] bg-[#061a36] hover:bg-[#155ec0] text-white flex items-center justify-center gap-3 font-black text-[12px] uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              Finalizar y Enviar <CheckCircle2 className="size-4" />
            </button>
          )}
        </div>
      </form>

      {/* Trust Badges */}
      <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap justify-between items-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <ShieldCheck className="size-3" /> Datos Protegidos (Ley 1581)
        </p>
        <div className="flex gap-4">
           {/* Placeholder for small icons */}
           <div className="h-4 w-12 bg-slate-200 rounded" />
           <div className="h-4 w-12 bg-slate-200 rounded" />
        </div>
      </div>
    </div>
  );
};
