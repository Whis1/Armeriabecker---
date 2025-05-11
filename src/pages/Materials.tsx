
import React, { useState, useEffect } from 'react';
import { materials } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Materials = () => {
  // Sort materials alphabetically by name
  const sortedMaterials = [...materials].sort((a, b) => a.name.localeCompare(b.name));
  
  // State for material quantities
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const [subtotals, setSubtotals] = useState<{[key: string]: number}>({});
  const [total, setTotal] = useState<number>(0);

  // Update subtotals and total when quantities change
  useEffect(() => {
    let newSubtotals: {[key: string]: number} = {};
    let newTotal = 0;
    
    materials.forEach(material => {
      const quantity = quantities[material.id] || 0;
      const subtotal = quantity * material.price;
      
      newSubtotals[material.id] = subtotal;
      newTotal += subtotal;
    });
    
    setSubtotals(newSubtotals);
    setTotal(newTotal);
  }, [quantities]);

  // Handle quantity change
  const handleQuantityChange = (materialId: string, value: string) => {
    const numValue = value === '' ? 0 : parseInt(value);
    
    setQuantities(prev => ({
      ...prev,
      [materialId]: isNaN(numValue) ? 0 : numValue
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Materiali</span>
          </h1>
          
          <div className="overflow-hidden vintage-card animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-armeria-wood text-white">
                    <th className="px-4 py-3 text-left">Nome Materiale</th>
                    <th className="px-4 py-3 text-right">Prezzo</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMaterials.map((material, index) => (
                    <tr key={material.id} className={index % 2 === 0 ? 'bg-transparent' : 'bg-armeria-brass/5'}>
                      <td className="px-4 py-3 text-left flex items-center">
                        <Box className="h-4 w-4 mr-2 text-armeria-wood/70" />
                        <span>{material.name}</span>
                      </td>
                      <td className="px-4 py-3 text-right">${material.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Material Calculator */}
          <Card className="mt-8 vintage-card">
            <CardHeader className="bg-armeria-wood/80 text-white">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calcolatore Materiali
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-armeria-brass/10">
                    <TableHead>Nome Materiale</TableHead>
                    <TableHead className="text-right">Prezzo Unitario</TableHead>
                    <TableHead>Quantità</TableHead>
                    <TableHead className="text-right">Subtotale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedMaterials.map((material) => (
                    <TableRow key={`calc-${material.id}`}>
                      <TableCell>{material.name}</TableCell>
                      <TableCell className="text-right">${material.price.toFixed(2)}</TableCell>
                      <TableCell className="w-32">
                        <Input
                          type="number"
                          min="0"
                          value={quantities[material.id] || ''}
                          onChange={(e) => handleQuantityChange(material.id, e.target.value)}
                          placeholder="0"
                          className="text-right"
                        />
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${subtotals[material.id] ? subtotals[material.id].toFixed(2) : '0.00'}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-armeria-wood/10 font-bold">
                    <TableCell colSpan={3} className="text-right">Totale Generale:</TableCell>
                    <TableCell className="text-right">${total.toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <Button asChild className="bg-armeria-wood hover:bg-armeria-wood/80">
              <Link to="/">Torna in Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materials;
