import { Routes } from '@angular/router';
import { PrincipalPage } from './pages/principal';
import { DemonHunters } from './pages/peliculas/holyNightDemonHunters/holyNightDemonHunters';
import { KPop } from './pages/peliculas/kPop/kPopDemonHunters';
import { FantasticFour } from './pages/peliculas/theFantasticFourFirstSteps/theFantasticFourFirstSteps';
import { PlayDirty } from './pages/peliculas/playDirty/playDirty';
import { StrangersTwo } from './pages/peliculas/theStrangersChapterTwo/theStrangersChapterTwo';
import { War2 } from './pages/peliculas/war-2/war-2';
import { ToxicAvenger } from './pages/peliculas/theToxicAvengerUnrated/theToxicAvengerUnrated';
import { Marco } from './pages/peliculas/marco/marco';
import { PrimitiveWar } from './pages/peliculas/primitiveWar/primitiveWar';
import { LostPrincess } from './pages/peliculas/theLostPrincess/theLostPrincess';
import { WomanCabin } from './pages/peliculas/theWomanInCabin10/theWomanInCabin10';
import { CaptainHook } from './pages/peliculas/captainHookTheCursedTides/captainHookTheCursedTides';
import { Contactos } from './pages/navegacion/contactos/contactos';

export const routes: Routes = [
    {
        path:'',
        component: PrincipalPage
    },
    {
        path:'theToxicAvengerUnrated',
        component: ToxicAvenger
    },
    {
        path:'theFantasticFourFirstSteps',
        component: FantasticFour
    },
    {
        path:'holyNightDemonHunters',
        component: DemonHunters
    },
    {
        path:'marco',
        component: Marco
    },
    {
        path:'playDirty',
        component: PlayDirty
    },
    {
        path:'primitiveWar',
        component: PrimitiveWar
    },
    {
        path:'theLostPrincess',
        component: LostPrincess
    },
    {
        path:'theStrangersChapterTwo',
        component: StrangersTwo
    },
    {
        path:'war-2',
        component: War2
    },       
    {
        path:'theWomanInCabin10',
        component: WomanCabin
    },    
    {
        path:'kPopDemonHunters',
        component: KPop
    },
    {
        path:'captainHookTheCursedTides',
        component: CaptainHook
    },
    {
        path:'contactos',
        component: Contactos
    }
      
];
