import MyCard from "./Card";

const Cards = (props) =>{
    
    const {caughtEvents, detector, selectedIds, setSelectedIds} = props

    const filterEvents = (detector, events) => {
        if (detector === 'all') return events

        const filterFunc = (currentValue) => {
            return detector === currentValue.detector;
        }


        return events.filter(
            (currentValue) => filterFunc(currentValue)
        );
    }

    const oneCard = (caughtEvent, key) => {
        return(
            <MyCard key={key} {...caughtEvent} {...{selectedIds, setSelectedIds}}/>
        )
    }

    return(
        <>
            {
                caughtEvents.map((caughtEvent) =>
                    oneCard(caughtEvent, caughtEvent.id))
            }
        </>
    );
}


export default Cards;