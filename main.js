const search = instantsearch({
	appId:'W7KWJTJNPP',
	apiKey:'2c504d47b5fb61878309be96821868a0',
	indexName:'search_issues',
	routing: true
});

search.addWidget(
	instantsearch.widgets.searchBox({
		container:'#search-input'
	})
);

search.addWidget(
	instantsearch.widgets.hits({
		container:'#hits',
		hitsPerPage:10,
		templates:{
			item: document.getElementById('hit-template').innerHTML,
			empty: "no results, sorry <em>\"{{query}}\"</em>"
		}
	})
);
search.start();