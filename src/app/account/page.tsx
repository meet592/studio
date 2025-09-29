import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User } from 'lucide-react';

const orders = [
    { id: '#34567', date: 'March 5, 2024', status: 'Delivered', total: '$52.99' },
    { id: '#34123', date: 'February 12, 2024', status: 'Delivered', total: '$22.99' },
    { id: '#33984', date: 'January 28, 2024', status: 'Delivered', total: '$75.00' },
];

export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="flex items-start gap-6 mb-12">
        <div className="bg-secondary rounded-full p-4 border">
            <User className="h-10 w-10 text-primary" />
        </div>
        <div>
            <h1 className="text-4xl font-headline">My Account</h1>
            <p className="text-muted-foreground">Manage your profile, orders, and settings.</p>
        </div>
      </div>
      
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Your Orders</CardTitle>
              <CardDescription>Here's a list of your past orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {orders.map(order => (
                        <div key={order.id}>
                            <div className="flex justify-between items-center">
                                <div className="font-semibold">Order {order.id}</div>
                                <div className="text-sm text-muted-foreground">{order.date}</div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <Badge variant={order.status === 'Delivered' ? 'default': 'secondary'} className={order.status === 'Delivered' ? 'bg-green-100 text-green-800' : ''}>
                                        {order.status}
                                    </Badge>
                                </div>
                                <div className="font-medium">{order.total}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Sakura" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Sip" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="sakura@example.com" />
                </div>
                <Separator />
                 <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                 <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <Button>Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
