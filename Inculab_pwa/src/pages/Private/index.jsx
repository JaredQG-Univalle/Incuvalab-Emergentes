import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { StoreContext } from "@/context/store";
import React, { useContext, useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import client from "@/api";
import Menu from "@/components/Menu";
import Home from "./Home";
import User_list from "./admin/User/User_list";
import User_form from "./admin/User/User_form";
import User_detail from "./admin/User/User_detail";
import Group_list from "./admin/Group/Group_list";
import Group_detail from "./admin/Group/Group_detail";
import Group_form from "./admin/Group/Group_form";

        import Categoria_list from "@/pages/Private/inspiring/categoria/Categoria_list";
        import Categoria_form from "@/pages/Private/inspiring/categoria/Categoria_form";
        import Categoria_detail from "@/pages/Private/inspiring/categoria/Categoria_detail";
        
        import Casos_list from "@/pages/Private/inspiring/casos/Casos_list";
        import Casos_form from "@/pages/Private/inspiring/casos/Casos_form";
        import Casos_detail from "@/pages/Private/inspiring/casos/Casos_detail";
        
        import Autor_list from "@/pages/Private/inspiring/autor/Autor_list";
        import Autor_form from "@/pages/Private/inspiring/autor/Autor_form";
        import Autor_detail from "@/pages/Private/inspiring/autor/Autor_detail";
        
        import Proyectos_list from "@/pages/Private/partners/proyectos/Proyectos_list";
        import Proyectos_form from "@/pages/Private/partners/proyectos/Proyectos_form";
        import Proyectos_detail from "@/pages/Private/partners/proyectos/Proyectos_detail";
        
        import Matches_list from "@/pages/Private/partners/matches/Matches_list";
        import Matches_form from "@/pages/Private/partners/matches/Matches_form";
        import Matches_detail from "@/pages/Private/partners/matches/Matches_detail";
        
        import Mensajes_list from "@/pages/Private/partners/mensajes/Mensajes_list";
        import Mensajes_form from "@/pages/Private/partners/mensajes/Mensajes_form";
        import Mensajes_detail from "@/pages/Private/partners/mensajes/Mensajes_detail";
        //importsVistas
        
        
        
        
        
        

export default function Private() {
  const store = useContext(StoreContext);
  const location = useLocation();

  function refreshToken() {
    client
      .post("/user/refreshToken")
      .then((r) => {
        store.refreshToken(r?.data);
      })
      .catch((e) => {
        store.logout();
        window.location.reload();
      });
  }

  useEffect(() => {
    refreshToken();
    const interval = setInterval(
      () => {
        refreshToken();
      },
      parseInt(import.meta.env.VITE_JWT_TIME) * 60 * 1000,
    );
    return () => clearInterval(interval);
  }, []);

  if (!store.user) return <Redirect to={"/login"} />;

  return (
    <React.Fragment>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/app/home" exact={true} component={Home} />

          <Route path="/app/user/list" exact={true} component={User_list} />
          <Route
            path="/app/user/detail/:id"
            exact={true}
            component={User_detail}
          />
          <Route path="/app/user/create" exact={true} component={User_form} />
          <Route
            path="/app/user/update/:id"
            exact={true}
            component={User_form}
          />

          <Route path="/app/group/list" exact={true} component={Group_list} />
          <Route
            path="/app/group/detail/:id"
            exact={true}
            component={Group_detail}
          />
          <Route path="/app/group/create" exact={true} component={Group_form} />
          <Route
            path="/app/group/update/:id"
            exact={true}
            component={Group_form}
          />

          
        {/* initJSXcategoria */}
        <Route path="/app/categoria/list" exact={true} component={Categoria_list} />
        <Route path="/app/categoria/detail/:id" exact={true} component={Categoria_detail} />
        <Route path="/app/categoria/create" exact={true} component={Categoria_form} />
        <Route path="/app/categoria/update/:id" exact={true} component={Categoria_form} />
        {/* endJSXcategoria */}

        
        {/* initJSXcasos */}
        <Route path="/app/casos/list" exact={true} component={Casos_list} />
        <Route path="/app/casos/detail/:id" exact={true} component={Casos_detail} />
        <Route path="/app/casos/create" exact={true} component={Casos_form} />
        <Route path="/app/casos/update/:id" exact={true} component={Casos_form} />
        {/* endJSXcasos */}

        
        {/* initJSXautor */}
        <Route path="/app/autor/list" exact={true} component={Autor_list} />
        <Route path="/app/autor/detail/:id" exact={true} component={Autor_detail} />
        <Route path="/app/autor/create" exact={true} component={Autor_form} />
        <Route path="/app/autor/update/:id" exact={true} component={Autor_form} />
        {/* endJSXautor */}

        
        {/* initJSXproyectos */}
        <Route path="/app/proyectos/list" exact={true} component={Proyectos_list} />
        <Route path="/app/proyectos/detail/:id" exact={true} component={Proyectos_detail} />
        <Route path="/app/proyectos/create" exact={true} component={Proyectos_form} />
        <Route path="/app/proyectos/update/:id" exact={true} component={Proyectos_form} />
        {/* endJSXproyectos */}

        
        {/* initJSXmatches */}
        <Route path="/app/matches/list" exact={true} component={Matches_list} />
        <Route path="/app/matches/detail/:id" exact={true} component={Matches_detail} />
        <Route path="/app/matches/create" exact={true} component={Matches_form} />
        <Route path="/app/matches/update/:id" exact={true} component={Matches_form} />
        {/* endJSXmatches */}

        
        {/* initJSXmensajes */}
        <Route path="/app/mensajes/list" exact={true} component={Mensajes_list} />
        <Route path="/app/mensajes/detail/:id" exact={true} component={Mensajes_detail} />
        <Route path="/app/mensajes/create" exact={true} component={Mensajes_form} />
        <Route path="/app/mensajes/update/:id" exact={true} component={Mensajes_form} />
        {/* endJSXmensajes */}

        {/* router */}
        
        
        
        
        
        
        </IonRouterOutlet>
      </IonSplitPane>
    </React.Fragment>
  );
}
