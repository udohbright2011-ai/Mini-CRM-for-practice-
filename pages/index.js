import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetchLeads()
  }, [])

  async function fetchLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    setLeads(data || [])
  }

  return (
    <div style={{padding:20}}>
      <h1>Mini CRM Leads</h1>

      {leads.map((lead) => (
        <div key={lead.id} style={{marginBottom:20}}>
          <strong>{lead.name}</strong>
          <p>{lead.email}</p>
          <p>{lead.phone}</p>
          <p>Status: {lead.status}</p>
        </div>
      ))}
    </div>
  )
}
