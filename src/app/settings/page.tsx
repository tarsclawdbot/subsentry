"use client";

import { Download, Trash2, Bell, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"; // Need to create Switch
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubscriptions } from "@/hooks/use-subscriptions";

export default function SettingsPage() {
  const { subscriptions } = useSubscriptions();

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(subscriptions, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "subsentry_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleClearData = () => {
    if (confirm("Are you sure you want to delete all data? This cannot be undone.")) {
        localStorage.clear();
        window.location.reload();
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your display and notification settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
               <div className="p-2 bg-slate-100 rounded-full">
                 <Globe className="h-5 w-5 text-slate-600" />
               </div>
               <div>
                 <p className="font-medium text-slate-900">Currency</p>
                 <p className="text-sm text-slate-500">Select your preferred display currency.</p>
               </div>
            </div>
            <Select defaultValue="usd">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
               <div className="p-2 bg-slate-100 rounded-full">
                 <Bell className="h-5 w-5 text-slate-600" />
               </div>
               <div>
                 <p className="font-medium text-slate-900">Notifications</p>
                 <p className="text-sm text-slate-500">Receive alerts 3 days before renewal.</p>
               </div>
            </div>
            {/* Switch component not created yet, using simplified toggle or just a button/checkbox for now */}
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
          <CardDescription>Control your local data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
                <div>
                    <p className="font-medium">Export Data</p>
                    <p className="text-sm text-slate-500">Download a JSON backup of your subscriptions.</p>
                </div>
                <Button variant="outline" onClick={handleExport}>
                    <Download className="mr-2 h-4 w-4" /> Export
                </Button>
            </div>
             <div className="flex items-center justify-between pt-2">
                <div>
                    <p className="font-medium text-red-600">Delete All Data</p>
                    <p className="text-sm text-slate-500">Permanently remove all subscriptions from local storage.</p>
                </div>
                <Button variant="destructive" onClick={handleClearData}>
                    <Trash2 className="mr-2 h-4 w-4" /> Clear Data
                </Button>
            </div>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-slate-600">
                SubSentry v1.0.0 <br/>
                Built with Next.js, Tailwind CSS, and shadcn/ui.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
