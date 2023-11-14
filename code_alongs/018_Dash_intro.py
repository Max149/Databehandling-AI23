from dash import Dash, html, dcc, callback, Output, Input

app = Dash(__name__)

my_H1 = html.H1("My Dash app.") # <h1>My dash app.</h1>
my_H2 = html.H2("more info....") # <h1>more info....</h1>
my_dropdown = dcc.Dropdown(options=["Äpple", "Päron", "Apelsin"], value="Päron")
app.layout = html.Div(children=[my_H1, my_H2, my_dropdown])

@callback(
    Output(my_H2, component_property="children"),
    Input(my_dropdown, component_property="value")
)
def update_heading2(fruit):
    return fruit.upper()

app.run(debug=True)