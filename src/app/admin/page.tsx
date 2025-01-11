"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, doc, getDoc, Timestamp } from "firebase/firestore";

interface Complaint {
  id: string;
  category: string;
  description: string;
  location: string;
  status: string;
  createdAt: Timestamp;
}

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdminRole = async () => {
      console.log("Checking admin role:", { loading, user });

      if (loading) {
        console.log("Still loading auth state");
        return;
      }

      if (!user) {
        console.log("No user found, redirecting to login");
        router.push("/login");
        return;
      }

      try {
        console.log("Fetching user document for:", user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("User data:", userData);
          
          if (userData?.role === "admin" || userData?.role === "user") {
            console.log("User access granted");
            setIsAdmin(true);
            setIsCheckingAdmin(false);
          } else {
            console.log("Access denied");
            setIsCheckingAdmin(false);
            setIsAdmin(false);
            router.push("/login");
          }
        } else {
          console.error("User document not found");
          setIsCheckingAdmin(false);
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        setIsCheckingAdmin(false);
        router.push("/login");
      }
    };

    checkAdminRole();
  }, [user, loading, router]);

  useEffect(() => {
    const fetchComplaints = async () => {
      if (!isAdmin) return;
      
      try {
        const snapshot = await getDocs(collection(db, "complaints"));
        const complaintsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Complaint[];
        setComplaints(complaintsData);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, [isAdmin]);

  const updateStatusLocally = (id: string, newStatus: string) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: newStatus } : complaint
      )
    );
    alert(`Status for complaint ${id} updated to ${newStatus}`);
  };

  if (loading || isCheckingAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
          Admin Dashboard
        </h1>
        <div className="overflow-hidden rounded-lg shadow-md bg-gray-800/80">
          <table className="w-full text-left text-sm text-gray-200">
            <thead className="bg-gray-700 text-gray-300 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="border-b border-gray-700 hover:bg-gray-700/50 transition"
                >
                  <td className="px-4 py-3">{complaint.category}</td>
                  <td className="px-4 py-3">{complaint.description}</td>
                  <td className="px-4 py-3">{complaint.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        complaint.status === "resolved"
                          ? "bg-green-600 text-green-100"
                          : complaint.status === "in-progress"
                          ? "bg-yellow-600 text-yellow-100"
                          : "bg-red-600 text-red-100"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={complaint.status}
                      onChange={(e) =>
                        setComplaints((prev) =>
                          prev.map((c) =>
                            c.id === complaint.id
                              ? { ...c, status: e.target.value }
                              : c
                          )
                        )
                      }
                      className="text-xs rounded bg-gray-700 text-white p-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
