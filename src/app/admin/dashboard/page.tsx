import { createClient } from "@/utils/supabase/server";
import { logout } from "../login/actions";
import { LogOut, Users, Download } from "lucide-react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/admin/login");
  }

  // Obtener los registros
  const { data: registros, error } = await supabase
    .from("registros")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gaitas-blue p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gaitas-cyan/20 text-gaitas-cyan rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400 text-sm">Gestiona los registros de Gaitas Anauco</p>
            </div>
          </div>
          
          <form action={logout}>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 border border-white/10 hover:border-red-500/30 rounded-lg transition-all text-sm font-medium">
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </form>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-gray-400 font-medium mb-2">Total Registros</h3>
            <p className="text-4xl font-bold text-white">{registros?.length || 0}</p>
          </div>
          {/* Add more stats if needed */}
        </div>

        {/* Table Area */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Lista de Registrados</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-gaitas-cyan text-gaitas-blue font-semibold rounded-lg hover:bg-gaitas-cyan/90 transition-all text-sm">
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-6 py-4 font-medium">Nombre</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Teléfono</th>
                  <th className="px-6 py-4 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {registros?.map((registro) => (
                  <tr key={registro.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{registro.nombre} {registro.apellidos}</div>
                    </td>
                    <td className="px-6 py-4">{registro.email}</td>
                    <td className="px-6 py-4">{registro.telefono || "-"}</td>
                    <td className="px-6 py-4">{new Date(registro.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
                {(!registros || registros.length === 0) && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No hay registros todavía.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
