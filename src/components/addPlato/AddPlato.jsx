import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { actionGetrestaurantesAsync } from "";
import { fileUpLoad } from "../../services/fileUpLoad";
import { actionAddPlatoAsync } from "../../redux/actions/platosActions";

const category = [
  {
    label: "fast food",
    value: 1,
  },
  { label: "pizza", value: 2 },
  { label: "hamburguers", value: 3 },
  { label: "pasta", value: 4 },
  { label: 'mexican', value:5},
  {label: 'salads', value:6},
  {label:'vegetarian', value:7}
];

const inputList = [
 { label: 'Nombre',
type: 'text',
name: 'name',
},
{ label: 'Categoría',
  type: 'select',
  name: 'category',
},
{ label: 'Descripción',
type: 'textarea',
name: 'description',
},
{ label: 'Precio',
  type: 'textarea',
  name: 'description',
},
{ label: 'Propiedad',
type: 'selectTwo',
name: 'property',
},
{ label: 'Imagen',
type: 'file',
name: 'image',},
];

const AddPlato = (plato) => {
    const dispatch = useDispatch();
    const {restaurantes}= useSelector ((store) => store.restaurantStore);

}