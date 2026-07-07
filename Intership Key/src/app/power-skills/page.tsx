'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { mockPowerSkills } from '@/data/mockData';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function PowerSkills() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-main">Power Skills</h2>
        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm">Nivel Global: 80%</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart Section */}
        <div className="bg-surface rounded-xl p-6 shadow-card min-h-[400px] flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-main mb-6 w-full text-center">Análisis de Habilidades</h3>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mockPowerSkills}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="5%" stopColor="#006DFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8E4BFB" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#E5E5E8" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#7E7D8A', fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#006DFF', fontWeight: 'bold' }}
                />
                <Radar
                  name="Nivel"
                  dataKey="A"
                  stroke="#8E4BFB"
                  fill="url(#colorUv)"
                  fillOpacity={0.6}
                  animationBegin={200}
                  animationDuration={1500}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Details Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-main mb-4">Detalle por Competencia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockPowerSkills.map((skill, index) => (
              <div key={index} className="bg-surface border border-main rounded-xl p-5 hover:shadow-card transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-main">{skill.subject}</h4>
                  {skill.A >= 80 && <CheckCircle2 className="w-5 h-5 text-green" />}
                </div>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-2xl font-bold text-main">{skill.A}%</span>
                  <span className="text-sm text-muted mb-1">dominio</span>
                </div>
                <div className="h-2 w-full bg-gray-light dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${skill.A}%`,
                      backgroundColor: skill.A >= 80 ? '#31E083' : skill.A >= 70 ? '#006DFF' : '#8E4BFB'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
