import React from 'react';

class Container extends React.Component{
     render(){
             return(
             
                			
                <section role="main" className="content-body">
                      
                                        <header className="page-header">
						<h2>Editable Tables</h2>
					
						<div className="right-wrapper pull-right">
							<ol className="breadcrumbs">
								<li>
									<a href="index.html">
										<i className="fa fa-home"></i>
									</a>
								</li>
								<li><span>Tables</span></li>
								<li><span>Editable</span></li>
							</ol>
					
							<a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fa fa-chevron-left"></i></a>
						</div>
					</header>

	

						<section className="panel">
							<header className="panel-heading">
								<div className="panel-actions">
									<a href="#" className="panel-action panel-action-toggle" data-panel-toggle></a>
									<a href="#" className="panel-action panel-action-dismiss" data-panel-dismiss></a>
								</div>

								<h2 className="panel-title">Listado de Formatos</h2>
							</header>
							<div className="panel-body">
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-md">
											<button id="addToTable" className="btn btn-primary">Formato <i className="fa fa-plus"></i></button>
										</div>
									</div>
								</div>
								<table className="table table-bordered table-striped mb-none" id="datatable-editable">
									<thead>
										<tr>
											<th>#</th>
											<th>Formato</th>
											
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr data-item-id="1">
											
                                                                                <td>Win 95+</td>
											<td>Win 95+</td>
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="2">
											<td>Trident</td>
											
											<td>Win 95+</td>
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="3">
											<td>Trident</td>
											
											<td>Win 95+</td>
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="4">
											<td>Trident</td>
											
											<td>Win 98+</td>
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="5">
											<td>Trident</td>
											<td>Internet Explorer 7</td>
											
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="6">
											<td>Trident</td>
											<td>AOL browser (AOL desktop)</td>
											
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="7">
											<td>Gecko</td>
											<td>Firefox 1.0</td>
											
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
										<tr data-item-id="8">
											<td>Gecko</td>
											<td>Firefox 1.5</td>
											
											<td className="actions">
												<a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
												<a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
												<a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
												<a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
											</td>
										</tr>
								
									
									
									</tbody>
								</table>
							</div>
						</section>

        </section>
                      
             )
     }

}  
export default Container;