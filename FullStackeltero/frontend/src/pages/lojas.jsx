import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'



export default function PageStores() {
  useEffect(() => {
    console.log('Just opened page ---> STORES');
  }, []);

  return (
    <Container>
      <h1>Nossas Lojas</h1>

      <main className="container">
        <section className="row">
            city="Rio de Janeiro"
            address="Av. Tiradentes, 3210"
            floor="10° Andar"
            district="Botafogo"
            number="(21) 2222-5874"
          

      
            city="Guarulhos "
            address="Av. Principal, 352"
            district="Centro"
            number="(11) 4444-555"
          

         
            city="Santa Catarina"
            address="Rua garibalde, 30"
            district="Recreio"
            number="(47) 5555-5555"
    
          </section>
          
      </main>
    </Container>
  );
}
