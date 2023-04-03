import React from "react";
import AdminNav from "../adminComponents/AdminNav";
import AdminBar from "../adminComponents/AdminBar";
import { Tabs } from "flowbite-react";
import FacturasBarrio from "./FacturasBarrio";

export default function Generals() {
  return (
    <div className="flex flex-col bg-gray-200 h-full justify-between main">
      <AdminNav />
      <div className="bg-white/80 flex flex-col p-3 flex flex-col gap-3">
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item title="Facturas Barrio "  icon={""}>
            <FacturasBarrio />
          </Tabs.Item>

          <Tabs.Item active={true} title="Dashboard" icon={""}>
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={""}>
            Settings content
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={""}>
            Contacts content
          </Tabs.Item>
          <Tabs.Item disabled={true} title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      </div>

      <AdminBar />
    </div>
  );
}
