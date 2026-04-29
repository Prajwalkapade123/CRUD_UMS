import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, onConfirm, title, message, isDestructive = false }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-slate-600">{message}</p>
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 font-medium text-white rounded-lg transition-colors ${
              isDestructive 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
