// ==========================================================================
// Project:   Fweb.MainMenuView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.MainMenuView = SC.View.extend(
/** @scope Fweb.MainMenuView.prototype */ {

	createChildViews: function(){
    var view, childViews = [];
		
		/* menù vendite */
		var subMenuOrdiniReport = [
			{ title: 'report 1', isEnabled: YES, icon: sc_static('resources/icons/table.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'report 2', isEnabled: NO, icon: sc_static('resources/icons/table.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' }
		];
		var subMenuOrdini = [
			{ title: 'lista ordini', keyEquivalent: 'ctrl_shift_i', icon: sc_static('resources/icons/table.png'), target: 'Fweb.ordersController', action: 'showOrders', },
			{ title: 'nuovo ordine', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png'), target: 'Fweb.orderController', action: 'showOrder', },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane', },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '990 - Alpeat' },
			{ title: '989 - L.P.T.' },
			{ title: '988 - Vant Srl' },
			{ title: '987 - Sb - lavorazioni Snc' },
			{ title: '986 - Fincantieri Spa' },
			{ title: 'vedi tutti ...' }
		];
		var subMenuOfferte = [
			{ title: 'lista offerte', keyEquivalent: 'ctrl_shift_i', icon: sc_static('resources/icons/table.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'nuova offerta', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '112 - Fincantieri Spa' },
			{ title: '111 - Alpeat' },
			{ title: '110 - Vant Srl' },
			{ title: '109 - Sb - lavorazioni Snc' },
			{ title: '108 - L.P.T.' },
			{ title: 'vedi tutti ...' }
		];
		var subMenuDdt = [
			{ title: 'lista DDT', keyEquivalent: 'ctrl_shift_i', icon: sc_static('resources/icons/table.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'nuovo DDT', keyEquivalent: 'ctrl_shift_n', icon: sc_static('resources/icons/add.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'ricerca', icon: sc_static('resources/icons/magnifier.png'), target: 'Fweb.mainMenuController', action: 'showSorryPane' },
			{ title: 'report', icon: sc_static('resources/icons/table_multiple.png'), subMenu: subMenuOrdiniReport },
			{ isSeparator: YES },
			{ title: '701 - Fincantieri Spa' },
			{ title: '700 - Alpeat' },
			{ title: '699 - Vant Srl' },
			{ title: '698 - Sb - lavorazioni Snc' },
			{ title: '697 - L.P.T.' },
			{ title: 'vedi tutti ...' }
		];
		var menuVendite = [
			{ title: 'offerte', subMenu: subMenuOfferte },
			{ title: 'ordini', subMenu: subMenuOrdini },
			{ title: 'ddt', subMenu: subMenuDdt },
			{ title: 'fatture' },
			{ isSeparator: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ title: 'Item with Icon', isChecked: YES, icon: 'sc-icon-alert-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', checkbox: YES, icon: 'sc-icon-trash-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù acquisti */
		var menuAcquisti = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-favorite-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-options-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù amministrazione */
		var menuAmministrazione = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-document-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-help-16', keyEquivalent: 'ctrl_p' }
		];
		/* menù magazzino */
		var menuMagazzino = [
			{ title: 'Item', keyEquivalent: 'ctrl_shift_n', target: 'Fweb' },
			{ title: 'Checked Item', isChecked: YES, keyEquivalent: 'ctrl_a', checkbox: YES },
			{ title: 'Selected Item', keyEquivalent: 'backspace' },
			{ isSeparator: YES },
			{ title: 'Item with Icon', icon: 'sc-icon-info-16', keyEquivalent: 'ctrl_m' },
			{ title: 'Item with Icon', icon: 'sc-icon-folder-16', keyEquivalent: 'ctrl_p' }
		];
		
		// Segmented Button items
		var segmentedButtons = [
			{ title: 'pref', value: 'pref', icon: 'sc-icon-options-16' },
			{ title: 'help', value: 'help', icon: 'sc-icon-help-16' }
		];

		// Using the Design Pattern method...only need to fill out the first parameter of the createChildView()
    view = this.createChildView( 
      SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, minWidth: 1024, height: 44},
				classNames: ['topbar'],
        childViews: 'logo userButton vendite acquisti amministrazione magazzino endButton optionsButtons newTabButton fwebSearchField fwebSearchCancelButton'.w(),

				logo: SC.LabelView.design({
					layout: { top: 6, left: 14, height: 32, width: 93 },
					classNames: ['f5lab-logo'],
					mouseDown: function() {
	          window.open('http://f5lab.com','_newtab');
	        },
				}),
				
				userButton: SC.ButtonView.design({
        	layout: { centerY: 0, left: 121, height: 40, width: 149 },
					titleBinding: "Fweb.userController.user.description",
        	icon: sc_static('resources/icons/user_suit.png'),
        	classNames: ['bar-button'],
	        toolTip: 'Pannello dati utente...', 
        	target: 'Fweb.userController',
        	action: 'showUserPane',
					textAlign: 'center'
      	}),
				
				vendite: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 270, height: 40, width: 100 },
					title: 'Vendite',
	        classNames: ['bar-button'],
	        toolTip: 'Menù vendite: offerte, ordini, ddt...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuVendite
	    		})
      	}),

				acquisti: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 370, height: 40, width: 100 },
					title: 'Acquisti',
	        classNames: ['bar-button'],
	        toolTip: 'Menù acquisti: offerte, ordini...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuAcquisti
	    		})
      	}),

				amministrazione: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 470, height: 40, width: 100 },
					title: 'Amministr.',
	        classNames: ['bar-button'],
	        toolTip: 'Menù amministrazione: contabilità, anagrafica...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuAmministrazione
	    		})
      	}),

				magazzino: SC.ButtonView.design(SCUI.DropDown, {
	        layout: { centerY: 0, left: 570, height: 40, width: 100 },
					title: 'Magazzino',
	        classNames: ['bar-button'],
	        toolTip: 'Menù magazzino: materiali, movimenti...', 
					dropDown: SC.MenuPane.design({
		        layout: { width: 170, height: 0 },
	          itemTitleKey: 'title',
	          itemIconKey: 'icon',
	          itemTargetKey: 'target',
	          itemActionKey: 'action',
	          itemSeparatorKey: 'isSeparator',
	          itemIsEnabledKey: 'isEnabled',
	          itemCheckboxKey: 'checkbox',
	    			contentView: SC.View.design({}),
						// isModal: NO,
	    			items: menuMagazzino
	    		})
      	}),

				endButton: SC.LabelView.design({
	        layout: { centerY: 0, left: 671, height: 40, width: 0 },
	        classNames: ['bar-button']
	      }),
	
				optionsButtons: SC.SegmentedView.design({
					layout: { centerY: 0, left: 680, height: 24, width: 150 },
					items: [
						{ title: '', value: 'pref', icon: 'sc-icon-options-16', target: 'Fweb.preferencesController', action: 'showPreferencesPane' },
						{ title: '', value: 'help', icon: 'sc-icon-help-16', target: 'Fweb.helpController', action: 'showHelpPane' },
						{ title: '', value: 'print', icon: sc_static('resources/icons/printer.png'), target: 'Fweb.mainMenuController', action: 'print' },
					],
		      itemTitleKey: 'title',
		      itemValueKey: 'value',
		      itemIconKey: 'icon',
		      itemTargetKey: 'target',
		      itemActionKey: 'action'
				}),
				
				newTabButton: SC.ButtonView.design({
					layout: { centerY: 0, left: 840, height: 24, width: 80 },
					title: 'New',
					toolTip: 'Apre una nuova tab con una pagina nuova di fweb.',
					icon: sc_static('resources/icons/application_add.png'),
					mouseDown: function() {
	          window.open('http://localhost:4020/fweb','_newtab'); // if local
		        // window.open('http://fweb.f5lab.com','_newtab'); // if build
	        },
				}),
	
				fwebSearchField: SC.TextFieldView.design(SCUI.ToolTip, {
	        // layout: { centerY: 0, height: 24, left: 900, width: 160 },
		      layout: { centerY: 0, height: 24, right: 10, width: 160 },
	        classNames: ['search-bar'],
	        hint: "search",
	        toolTip: "search",
	        //valueBinding: 'Fweb.assignmentsController.searchFilter'
	      }),
	      fwebSearchCancelButton: SC.View.design({ // Fweb Search cancel button
	        // layout: { centerY: 1, height: 12, left: 1042, width: 12 },
		      layout: { centerY: 1, height: 12, right: 15, width: 12 },
	        isVisible: YES, //NO,
	        classNames: ['filter-cancel-icon'],
	        mouseDown: function() {
	          //Fweb.assignmentsController.set('searchFilter', '');
	        },
	        //isVisibleBinding: SC.Binding.oneWay('Fweb.assignmentsController.searchFilter').bool()
	      })
	
	
      })
    );


    childViews.push(view);

    this.set('childViews', childViews);
  }

});
