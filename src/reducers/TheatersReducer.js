/* eslint-disable no-fallthrough */
export const TheatersReducer = function (state, { type, payload }) {
    console.log("type: ",type)
    switch (type) {
        case 'add':
            {
                var theater={
                    'id':payload.id,
                    'name':payload.name,
                    'location':payload.location,
                    'capacity':payload.capacity   
                }
                var newTheaters = state.theaters.concat(theater);
                return ({ ...state, theaters: newTheaters });
            }
        case 'delete':
            {
                var newTheaters2 = state.theaters.filter(theater => theater.id !== payload);
                return ({ ...state, theaters: newTheaters2 });
            }

        case 'set':
            {
                return ({ ...state, theaters: payload })
            }
        case 'update':
            {
                var newTheaters3=state.theaters.map((theater)=>{
                   return theater.id===payload.id?payload.reqBody:theater;
                })
                return({...state,theaters:newTheaters3})
            }
        default:
            {
                console.log("bad theater dispatcher type");
                return
            }
    }

}