import React from 'react';

const cards = [
  ['الهياكل المعدنية', 'حلول تشكيل وتصنيع تخدم المشاريع والقطاعات الإنشائية.'],
  ['أنظمة الأسقف والجدران', 'منتجات صناعية موثوقة بجودة تشغيلية للمشاريع الحديثة.'],
  ['حلول حسب المشروع', 'مرونة في المواصفات والكميات وربط الاحتياج بالتصنيع والتوريد.'],
];

export default function App() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',background:'#f4f7f5',color:'#123',minHeight:'100vh'}}>
      <section style={{padding:'72px 7vw',background:'linear-gradient(135deg,#082f26,#0f5b45)',color:'white'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <p style={{letterSpacing:3,opacity:.8}}>ARAAK INDUSTRY</p>
          <h1 style={{fontSize:'clamp(40px,7vw,88px)',margin:'12px 0'}}>اراك الصناعية</h1>
          <p style={{fontSize:20,maxWidth:720,lineHeight:1.8}}>قدرات صناعية موثوقة وجودة تدعم المشاريع والقطاعات التجارية.</p>
          <a href="#contact" style={{display:'inline-block',marginTop:24,padding:'14px 24px',borderRadius:12,background:'white',color:'#0f5b45',textDecoration:'none',fontWeight:700}}>اطلب عرضاً</a>
        </div>
      </section>
      <section style={{maxWidth:1100,margin:'0 auto',padding:'64px 7vw'}}>
        <h2 style={{fontSize:34}}>حلولنا الصناعية</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:18,marginTop:28}}>
          {cards.map(([title,body]) => <article key={title} style={{background:'white',padding:28,borderRadius:18,boxShadow:'0 12px 40px #1231'}}><h3>{title}</h3><p style={{lineHeight:1.8,opacity:.75}}>{body}</p></article>)}
        </div>
      </section>
      <section id="contact" style={{maxWidth:1100,margin:'0 auto',padding:'20px 7vw 72px'}}>
        <div style={{background:'#0f5b45',color:'white',padding:36,borderRadius:22}}><h2>ابدأ مشروعك مع اراك الصناعية</h2><p>تواصل معنا للحصول على عرض فني وتجاري مناسب لاحتياج المشروع.</p></div>
      </section>
    </main>
  );
}
