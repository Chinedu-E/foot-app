import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import SaasPage from "../pages/dashboard/SaasPage";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/leagues",
    element: <DashboardPageLayout />,
    state: "leagues",
    sidebarProps: {
      displayText: "Leagues",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "leagues.index"
      },
      {
        path: "/leagues/england",
        element: <DashboardPageLayout/>,
        state: "leagues.england",
        sidebarProps: {
          displayText: "England"
        },
        child: [
          {
            path: "/leagues/england/premier-league",
            element: <DefaultPage league={"premier-league"}/>,
            state: "leagues.england.premier-league",
            sidebarProps: {
            displayText: "Premier League"
            },
          },
          {
            path: "/leagues/england/championship",
            element: <DefaultPage league={"championship"}/>,
            state: "leagues.england.championship",
            sidebarProps: {
            displayText: "Championship"
            },
          },
          {
            path: "/leagues/england/league-one",
            element: <DefaultPage league={"league-one"}/>,
            state: "leagues.england.league-one",
            sidebarProps: {
            displayText: "League one"
            },
          },
          {
            path: "/leagues/england/league-two",
            element: <DefaultPage league={"league-two"}/>,
            state: "leagues.england.league-two",
            sidebarProps: {
            displayText: "League two"
            },
          },
        ]
      },
      {
        path: "/leagues/spain",
        element: <DashboardPageLayout/>,
        state: "leagues.spain",
        sidebarProps: {
          displayText: "Spain"
        },
        child: [
          {
            path: "/leagues/spain/la-liga",
            element: <DefaultPage league={"laliga"}/>,
            state: "leagues.laliga",
            sidebarProps: {
            displayText: "La liga"
            },
          },
          {
            path: "/leagues/spain/segunda-division",
            element: <DefaultPage league={"segunda"}/>,
            state: "leagues.segunda",
            sidebarProps: {
            displayText: "Segunda Division"
            },
          },
        ]
      },
      {
        path: "/leagues/france",
        element: <DashboardPageLayout/>,
        state: "leagues.france",
        sidebarProps: {
          displayText: "France"
        },
        child: [
          {
            path: "/leagues/france/ligue-one",
            element: <DefaultPage league={"ligue-one"}/>,
            state: "leagues.ligueone",
            sidebarProps: {
            displayText: "Ligue One"
            },
          },
          {
            path: "/leagues/france/ligue-two",
            element: <DefaultPage league={"ligue-two"}/>,
            state: "leagues.liguetwo",
            sidebarProps: {
            displayText: "Ligue Two"
            },
          },
        ]
      },
      {
        path: "/leagues/italy",
        element: <DashboardPageLayout/>,
        state: "leagues.italy",
        sidebarProps: {
          displayText: "Italy"
        },
        child: [
          {
            path: "/leagues/italy/serie-a",
            element: <DefaultPage league={"serie-a"}/>,
            state: "leagues.seriea",
            sidebarProps: {
            displayText: "Serie A"
            },
          },
          {
            path: "/leagues/italy/serie-b",
            element: <DefaultPage league={"serie-b"}/>,
            state: "leagues.serieb",
            sidebarProps: {
            displayText: "Serie B"
            },
          },
        ]
      },
      {
        path: "/leagues/netherland",
        element: <DashboardPageLayout/>,
        state: "leagues.netherland",
        sidebarProps: {
          displayText: "Netherland"
        },
        child: [
          {
            path: "/leagues/netherland/eredivisie",
            element: <DefaultPage league={"eredivisie"}/>,
            state: "leagues.eredivisie",
            sidebarProps: {
            displayText: "Eredivisie"
            },
          },
          {
            path: "/leagues/netherland/eerstedivisie",
            element: <DefaultPage league={"eerstedivisie"}/>,
            state: "leagues.eerstedivisie",
            sidebarProps: {
            displayText: "Eerste divisie"
            },
          },
        ]
      },
      {
        path: "/leagues/scotland",
        element: <DashboardPageLayout/>,
        state: "leagues.scotland",
        sidebarProps: {
          displayText: "Scotland"
        },
        child: [
          {
            path: "/leagues/scotland/premiership",
            element: <DefaultPage league={"premiership"}/>,
            state: "leagues.premiership",
            sidebarProps: {
            displayText: "Premiership"
            },
          },
        ]
      },
      {
        path: "/leagues/germany",
        element: <DashboardPageLayout />,
        state: "leagues.germany",
        sidebarProps: {
          displayText: "Germany"
        },
        child: [
          {
            path: "/leagues/germany/bundesliga",
            element: <DefaultPage league={"bundesliga"}/>,
            state: "leagues.bundesliga",
            sidebarProps: {
            displayText: "Bundesliga"
            },
          },
        ]
      }
    ]
  },
];

export default appRoutes;