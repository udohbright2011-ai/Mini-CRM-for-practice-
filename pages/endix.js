import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    loadLeads()
  }, [])

  async function loadLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")

    setLeads(data || [])
  }

  return (
    <div style={{padding:20}}>
      <h1>Mini CRM Leads</h1>

      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>
          <p>{lead.email}</p>
          <p>{lead.phone}</p>
        </div>
      ))}
    </div>
  )
}
