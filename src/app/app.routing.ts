import { RouterModule } from '@angular/router';

import { HomeComponent } from "./common/home/home.component";
import { EmpListComponent } from "./employees/emp-list/emp-list.component";
import { EmpDetailsComponent } from "./employees/emp-details/emp-details.component";
import { AboutComponent } from "./common/about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EmpCreateComponent } from "./employees/emp-create/emp-create.component";
import { NotFoundComponent } from "./common/not-found/not-found.component";

const appRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmpListComponent
    },
    {
        path: 'employees/create',
        component: EmpCreateComponent
    },
    {
        path: 'employees/:id',
        component: EmpDetailsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);