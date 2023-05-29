import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography
} from "@material-tailwind/react";

export default function ButtonMenu({ item, obj }) {
    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
        >
            <MenuHandler >
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href={item?.url} className="flex items-center">
                        {item?.title}
                    </a>
                </Typography>

            </MenuHandler>
            <MenuList>
                {
                    obj?.map((item, i) => {
                        return (
                            <MenuItem key={i} color="lightBlue">
                                <Typography
                                    key={i}
                                    as="li"
                                    variant="small"
                                    color="blue-gray"
                                    className="p-1 font-normal"
                                >
                                    <a href={item.url} className="flex items-center">
                                        {item.title}
                                    </a>
                                </Typography>
                            </MenuItem>
                        )
                    })
                }
            </MenuList>
        </Menu>
    );
}