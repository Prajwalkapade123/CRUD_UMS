import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ArrowLeft, User, Mail, Phone, Shield } from 'lucide-react';
import Loader from '../components/Loader';
import { transformUser } from '../utils/nameTransform';

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      setUser(transformUser(response.data));
    } catch (error) {
      toast.error('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (!user) return <div className="text-center py-12 text-slate-500">User not found</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link to="/users" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Details</h1>
          <p className="text-slate-500 text-sm">Detailed view of user information.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-3xl shadow-sm border-4 border-white">
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-slate-900">{user.firstName} {user.lastName}</h2>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white border border-slate-200 shadow-sm">
              <Shield className={`w-4 h-4 ${user.role === 'admin' ? 'text-indigo-600' : 'text-emerald-600'}`} />
              <span className="capitalize text-slate-700">{user.role || 'user'}</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-400">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Full Name</p>
                <p className="text-base font-medium text-slate-900 mt-0.5">{user.firstName} {user.lastName}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Email Address</p>
                <p className="text-base font-medium text-slate-900 mt-0.5">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Phone Number</p>
                <p className="text-base font-medium text-slate-900 mt-0.5">{user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
