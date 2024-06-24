import "./Proyecto.css";
import { ButtonVisit } from "./ButtonVisit";

import Logisnay from "../assets/Logisnay.png";

interface ProyectoProps {
  id: number;
}

export const Proyecto = (props: ProyectoProps) => {
  return (
    <div className="Proyecto" id={props.id.toString()}>
      {props.id % 2 === 0 ? (
        <>
          <img
            src={Logisnay}
            alt="Logisnay"
            style={{ borderRadius: "20px 0px 0px 20px" }}
          />
          <div className="desc">
            <h4>Página Web para Empresa de Logística</h4>
            <h2>LogisNay</h2>
            <p>
              Desarrollo de un sitio web estático para la empresa de logística{" "}
              <b>LogisNay</b>. La página proporciona información detallada sobre
              los servicios de la empresa y permite a los usuarios enviar
              correos electrónicos como método de contacto, utilizando PHP para
              el envío de los mismos.
            </p>
            <div className="botones">
              <ButtonVisit class="primary" text="Visitar" />
              <ButtonVisit class="secundary" text="Conocer Más" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="desc">
            <h4>Página Web para Empresa de Logística</h4>
            <h2>LogisNay</h2>
            <p>
              Desarrollo de un sitio web estático para la empresa de logística{" "}
              <b>LogisNay</b>. La página proporciona información detallada sobre
              los servicios de la empresa y permite a los usuarios enviar
              correos electrónicos como método de contacto, utilizando PHP para
              el envío de los mismos.
            </p>
            <div className="botones">
              <ButtonVisit class="primary" text="Visitar" />
              <ButtonVisit class="secundary" text="Conocer Más" />
            </div>
          </div>
          <img
            src={Logisnay}
            alt="Logisnay"
            style={{ borderRadius: "0px 20px 20px 0px" }}
          />
        </>
      )}
    </div>
  );
};
