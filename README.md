# Kringel
Erinevad katsetused suvepraktika jaoks

Esimesena plaanis teha desmose sarnane kalkulaator, matemaatiliste valemite kuvamiseks.

NÄIDE/ ESIALNGE PLAAN: 

1.Kasutaja sisestab valemi y = x^2 → MathQuill.

2. TypeScripti kood loeb sisendi LaTeX või plaintext kujul.

3. Graafikute mootor (nt function-plot) kasutab seda valemit ja joonistab graafiku.

4. (Valikuline) MathJax renderdab valemi visuaalselt teises kohas.

Tööriist	Milleks?	                            	       Install
Vite	Arendusserver, TypeScripti kompileerija		           npm install -D vite
TypeScript	TypeScript → JavaScript kompileerimiseks		   npm install -D typescript
MathJax	Valemite kuvamiseks (LaTeX / MathML renderdamine)	   CDN või npm install mathjax
Mathlive    Valemite sisestamiseks ja redigeerimiseks          npm install mathlive
(MathQuill asemel vt docsi)

https://www.npmjs.com/package/mathlive
