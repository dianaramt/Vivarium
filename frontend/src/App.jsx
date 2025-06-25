import Header from './components/Header';
import Footer from './components/Footer';
import Artigo from './components/Artigo';

export default function App() {
  const tortugas =
    `Nas tartarugas mariñas, o sexo das crías non se determina por factores xenéticos, como ocorre nos humanos (onde os cromosomas X e Y definen o sexo), senón que depende das condicións ambientais, concretamente da temperatura durante a incubación dos ovos. Este mecanismo coñécese como determinación sexual dependente da temperatura ou TSD polas súas siglas en inglés (Temperature-dependent Sex Determination).

Durante o período de incubación, que adoita durar entre 45 e 70 días dependendo da especie e das condicións ambientais, a temperatura media á que están expostos os ovos inflúe directamente no sexo das crías`;

    const marimos = `Os marimos, tamén coñecidos como bólas de musgo, son algas verdes únicas chamadas "Aegagropila linnaei". Fórmanse de maneira natural en lagos de augas frías en países como Xapón, Islandia e Estonia.

Ao contrario que outras algas, os marimos medran formando esferas suaves e esponxosas debido ao movemento constante da auga, que as fai rodar polo fondo do lago. Este movemento dálle a súa forma característica e evita que se podrezan.

Na cultura xaponesa, os marimos considéranse símbolos de boa sorte, amor eterno e perseveranza. Son populares como plantas decorativas en acuarios, xa que requiren pouco coidado e medran moi lentamente, apenas uns milímetros ao ano.

Ademais do seu atractivo estético, os marimos tamén axudan a osixenar a auga e a absorber impurezas, o que os converte en aliados naturais para manter acuarios limpos.`;


const hortensias=
"As hortensias poden cambiar de cor segundo o pH do solo onde están plantadas xa que o pH afecta se a planta pode absorber aluminio e iso cambia a cor das flores se o solo é ácido co pH baixo as flores saen azuis se o solo é alcalino co pH alto as flores saen rosas ou vermellas cun pH intermedio poden saír violetas ou cunha mestura de cores pódese cambiar o pH do solo engadindo produtos naturais como por exemplo para facer o solo máis ácido e ter flores azuis pódese usar turba ou agullas de piñeiro e para facer o solo máis alcalino e ter flores rosas pódese engadir cal non todas as hortensias cambian de cor xa que as hortensias brancas normalmente non cambian";

const bacteria ="A bacteria Deinococcus radiodurans é moi resistente á radiación que mata a outras formas de vida esta bacteria pode sobrevivir a doses moi altas de radiación porque ten un sistema moi eficiente para reparar o seu ADN danado é unha das bacterias máis resistentes coñecidas e por iso estudase para usar na limpeza de residuos radiactivos";
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-4 bg-gray-100">
        <Artigo 
          titulo="Como se determina o sexo nas tortugas mariñas?" 
          texto={tortugas} 
        />
      </main>

       <main className="flex-grow p-4 bg-gray-100">
        <Artigo 
          titulo="Bolas de musgo?" 
          texto={marimos} 
        />
      </main>

      <main className="flex-grow p-4 bg-gray-100">
        <Artigo 
          titulo="A cor das hortensias" 
          texto={hortensias} 
        />
      </main>

      <main className="flex-grow p-4 bg-gray-100">
        <Artigo 
          titulo="Unha superbacteria" 
          texto={hortensias} 
        />
      </main>

      <Footer />
    </div>
  );
}
