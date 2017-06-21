import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-06-21',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'All Day Event',
          start: '2017-06-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Corso Sala OPerativa',
          start: '2017-06-07',
          end: '2017-06-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Briefing CON',
          start: '2017-06-14T08:00:00',
          end: '2017-06-14T09:30:00',          
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Demo SOVVF',
          start: '2017-06-21T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }
}
